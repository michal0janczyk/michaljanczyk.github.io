---
layout: post
title:  "String Exercise #1"
date:   2020-12-01
categories: Algoritm
---
Exercise 1. Reverse Strings
In this first exercise, the goal is to write a function that takes a string as input and then returns the reversed string.
For example, if the input is the string `"water"`, then the output should be `"retaw"`.

    def string_reverser(our_string):
        # New empty string for us to build on
        new_string = ""
        # Iterate over old string
        for i in range(len(our_string)):
        # Grab the charecter from the back of the string and add them to the new str
            new_string += our_string[(len(our_string)-1)-i]
        # Return our solution
        return new_string

Exercise 2.  Anagrams
An anagram is a word or sentence created after rearranging the letters of another word (sentence). Both words are composed of the same letters but in a different order.
For example:

- "rat" is an anagram of "art"
- "alert" is an anagram of "alter"
- "Slot machines" is an anagram of "Cash lost in me"

Method 1 (Use Sorting) [Time Complexity: O(n log n)]

1. Sort both strings
2. Compare the sorted strings
    def anagram_checker(str1, str2):
      if len(str1) != len(str2):
          # Clean strings
          clean_str_1 = str1.replace(" ", "").lower()
          clean_str_2 = str2.replace(" ", "").lower()
          if sorted(clean_str_1) == sorted(clean_str_2):
              return True
      return False

Method 2 (Count characters)
This method assumes that the set of possible characters in both strings is small. In the following implementation, it is assumed that the characters are stored using 8 bit and there can be 256 possible characters.
Method 3 (Count characters using one array) [Time Complexity: O(n)]
The above implementation can be further to use only one count array instead of two. We can increment the value in count array for characters in str1 and decrement for characters in str2. Finally, if all count values are 0, then the two strings are anagram of each other. Thanks to Ace for suggesting this optimization.

    bool areAnagram(char* str1, char* str2) 
    { 
    // Create a count array and initialize all values as 0 
    int count[NO_OF_CHARS] = { 0 }; 
    int i;
    // For each character in input strings, increment count in 
    // the corresponding count array 
    for (i = 0; str1[i] && str2[i]; i++) { 
        count[str1[i]]++; 
        count[str2[i]]--; 
    } 
    
    // If both strings are of different length. Removing this condition 
    // will make the program fail for strings like "aaca" and "aca" 
    if (str1[i] || str2[i]) 
        return false; 
    
    // See if there is any non-zero value in count array 
    for (i = 0; i < NO_OF_CHARS; i++) 
        if (count[i]) 
            return false; 
    return true; 
    }

Exercise 3.  Hamming Distance
In information theory, the Hamming distance between two strings of equal length is the number of positions at which.
A measure of the difference of two strings of the same length, expressing the number of places (positions) in which the two strings differ. In other words, it is the fewest number of changes (replacing an item with another) that can make one string into another.

    def hamming_distance(str1, str2):
      if len(str1) == len(str2):
          count = 0
          for char in range(len(str1)):
              if str1[char] != str2[char]:
                  count+=1
          return count
      return None
