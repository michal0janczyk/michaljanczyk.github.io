import { Conversation } from 'https://esm.sh/@elevenlabs/client@latest';

class VoiceWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // 1. Define Styles & HTML
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-align: center; }
        
        button {
          background-color: #00D1FF; 
          color: white; 
          border: none; 
          padding: 14px 32px; 
          font-size: 16px; 
          font-weight: 700; 
          border-radius: 50px; 
          cursor: pointer; 
          transition: all 0.2s ease; 
          box-shadow: 0 4px 15px rgba(0, 209, 255, 0.4);
        }

        button:hover {
          background-color: #00b8e6;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 209, 255, 0.5);
        }

        button:disabled {
          background-color: #e0e0e0;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .status { margin-top: 12px; font-size: 13px; color: #666; transition: color 0.3s; }
        .error { color: #ff4d4f; }
        .speaking { color: #00D1FF; }
      </style>
      
      <button id="talkButton">Start Conversation</button>
      <div id="status" class="status">Ready</div>
    `;

    // 2. Setup Logic
    this.talkButton = this.shadowRoot.getElementById('talkButton');
    this.statusDiv = this.shadowRoot.getElementById('status');
    this.agentId = 'agent_4601khceyk26ebb9rbdrx4kvbn4b'; // Your Agent ID
    this.conversation = null;

    this.talkButton.onclick = () => this.toggleConversation();
  }

  async toggleConversation() {
    try {
      if (this.conversation) {
        await this.conversation.endSession();
        this.conversation = null;
        this.resetUI();
        return;
      }

      this.talkButton.disabled = true;
      this.talkButton.innerText = 'Connecting...';
      this.statusDiv.innerText = 'Requesting Mic...';

      this.conversation = await Conversation.startSession({
        agentId: this.agentId,
        onConnect: () => {
          this.talkButton.disabled = false;
          this.talkButton.innerText = 'Stop Talking';
          this.statusDiv.innerText = 'Listening...';
          this.statusDiv.className = 'status speaking';
        },
        onDisconnect: () => {
          this.resetUI();
        },
        onError: (error) => {
          console.error(error);
          this.statusDiv.innerText = 'Error: ' + error;
          this.statusDiv.className = 'status error';
          this.talkButton.disabled = false;
          this.talkButton.innerText = 'Start Conversation';
        },
        onModeChange: (mode) => {
            this.statusDiv.innerText = mode.mode === 'speaking' ? 'Agent Speaking' : 'Listening...';
        }
      });

    } catch (error) {
      console.error(error);
      this.statusDiv.innerText = 'Mic Access Denied. Check Browser Settings.';
      this.statusDiv.className = 'status error';
      this.talkButton.disabled = false;
      this.talkButton.innerText = 'Start Conversation';
    }
  }

  resetUI() {
    this.talkButton.disabled = false;
    this.talkButton.innerText = 'Start Conversation';
    this.statusDiv.innerText = 'Ready';
    this.statusDiv.className = 'status';
  }
}

customElements.define('voice-widget', VoiceWidget);