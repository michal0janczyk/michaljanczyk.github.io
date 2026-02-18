import { Conversation } from 'https://esm.sh/@elevenlabs/client@latest';

class PressToSpeakButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; width: 100%; height: 100%; }
        
        button {
          /* Match your "Press to Speak" design */
          background-color: #C1A265; /* Gold/Tan */
          color: black;              /* Black Text */
          border: none;
          width: 100%;
          height: 100%;
          
          /* Typography */
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 700; /* Bold */
          
          /* Shape */
          border-radius: 8px;
          cursor: pointer; 
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        button:hover { 
          background-color: #b0935a; 
          transform: scale(1.02); 
        }

        button:active { transform: scale(0.98); }
        
        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
      </style>

      <button id="btn">
        Press to Speak
      </button>
    `;

    this.btn = this.shadowRoot.getElementById('btn');
    this.agentId = 'agent_4601khceyk26ebb9rbdrx4kvbn4b'; // Your Agent ID
    this.conversation = null;

    this.btn.onclick = () => this.toggleConversation();
  }

  async toggleConversation() {
    try {
      if (this.conversation) {
        await this.conversation.endSession();
        this.conversation = null;
        this.btn.innerText = 'Press to Speak';
        this.btn.style.backgroundColor = '#C1A265';
        return;
      }

      this.btn.innerText = 'Connecting...';
      this.btn.disabled = true;

      this.conversation = await Conversation.startSession({
        agentId: this.agentId,
        onConnect: () => {
          this.btn.disabled = false;
          this.btn.innerText = 'Listening... (Tap to Stop)';
          this.btn.style.backgroundColor = '#d44a4a'; // Red when active
          this.btn.style.color = 'white';
        },
        onDisconnect: () => {
          this.btn.disabled = false;
          this.btn.innerText = 'Press to Speak';
          this.btn.style.backgroundColor = '#C1A265';
          this.btn.style.color = 'black';
          this.conversation = null;
        },
        onError: (error) => {
          console.error(error);
          this.btn.disabled = false;
          this.btn.innerText = 'Error (See Console)';
        }
      });

    } catch (error) {
      console.error(error);
      this.btn.innerText = 'Mic Access Denied';
      this.btn.disabled = false;
    }
  }
}

customElements.define('press-to-speak', PressToSpeakButton);