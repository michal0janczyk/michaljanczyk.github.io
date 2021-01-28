---
layout: post
title:  "Singly Linked Lists"
date:   2020-11-27 19:44:15 +0100
categories: Data Structure
---
### Arrays vs. Linked Lists


| Operation                                                                     | Arrays | Linked List |
|-------------------------------------------------------------------------------|--------|-------------|
| Insertion/Deletion at the beginning of the array or linked list given a value | O(n)   | O(1)        |
| Access Element                                                                | O(1)   | O(n)        |
| Contiguous Memory                                                             | Yes    | No          |

# Theory

We can distinguished three different types of linked lists:

- Singly Linked Lists
- Doubly Linked Lists
- Circular Linked List

Take a look at full implementation of **[Linked List][liked-list-imp]**.

A linked list is a data structure that represents a list of items, just like an array.

In fact, in any application in which you’re using an array, you could probably use a linked list instead. Under the hood, however, linked lists are implemented differently and can have different performance in varying situations.

Linked lists, on the other hand, do not consist of a bunch of memory cells in a row. Instead, they consist of a bunch of memory cells that are not next to each other, but can be spread across many different cells across the computer’s memory. These cells that are not adjacent to each other are known as nodes.

## Structure

Every linked list consists of nodes, as shown in the illustration above. Every node has two components:

1. Data
2. Next

The ***data*** component allows a node in the linked list to store an element of data that can be of type string, character, number, or any other type of object.

The ***next*** component in every node is a pointer that points from one node to another.

The start of the linked list is referred to as the head. head is a pointer that points to the beginning of the linked list, so if we want to traverse the linked list to obtain or access an element of the linked list, we’ll start from head and move along.

The last component of a singly linked list is a notion of null.

## Insertion/Deletion

If we are given an array and a value to insert at the beginning of an array. For insertion, we have to **shift** all the elements in the array to the right. The same is the case with the deletion of an element from the beginning of an array.

Inserting a node at the head of a linked list given the head node is a constant-time operation as we need to change the orientation of a few pointers.

## Accessing Elements

Accessing any element given an index in arrays is better than accessing nth elements in linked lists. It is a constant time operation to access elements in arrays. If given an array and an index, it can immediately give you the element at which the entry is stored. This is because arrays are contiguous.

It is easy to calculate. 

For example, in C/C++, an integer type takes up 4 bytes of memory to store the value, but in Python 3 an integer takes 14 bytes of space. Again, this extra space is used for housekeeping functions in the Python language.

Accessing an nth element in a linked list is an O(n) operation given that you have access to the head node of the linked list. If we want to access an element, we need to start from the head pointer and traverse the entire linked list before we can get to it. Iterate over the all nodes in linked list.

## Contiguous Memory

Arrays are contiguous in memory which allows the access time to be constant, whereas, in linked lists, you do not have the luxury of contiguous memory.

# Implementation

```python
class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

class LinkedList:
  def __init__(self):
    self.head = None
	
	def print_list(self):
    cur_node = self.head
    while cur_node:
      print(cur_node.data)
      cur_node = cur_node.next
```

## Insertion

We can distinguish three types of inserts:

### append

This method will insert an element at the end of the linked list.

```python
def append(self, data):
    new_node = Node(data)
    if self.head is None:
      self.head = new_node
      return
    last_node = self.head
    while last_node.next:
      last_node = last_node.next
    last_node.next = new_node
```

### prepend

This method will insert an element at the beginning of the linked list.

```python
def prepend(self, data):
    new_node = Node(data)

    new_node.next = self.head
    self.head = new_node
```

### insert_after_node

The last insertion method that we want to consider in this lesson is inserting an element after a given node.

```python
def insert_after_node(self, prev_node, data):
    if not prev_node:
      print("Previous node does not exist.")
      return
    new_node = Node(data)

    new_node.next = prev_node.next
    prev_node.next = new_node
```

## Deletion

### by_value

To delete a node by its value, we’ll first find the node to be deleted by traversing the linked list. Then, we’ll delete that node and update the rest of the pointers.

```python
def delete_node(self, key):

        cur_node = self.head

        if cur_node and cur_node.data == key:
            self.head = cur_node.next
            cur_node = None
            return

        prev = None 
        while cur_node and cur_node.data != key:
            prev = cur_node
            cur_node = cur_node.next

        if cur_node is None:
            return 

        prev.next = cur_node.next
        cur_node = None
```

### by_position

The overall logic will stay the same as in the previous lesson except that we’ll change the code a bit to cater to position rather than a key.

```python
def delete_node_at_pos(self, pos):
        if self.head:
            cur_node = self.head

            if pos == 0:
                self.head = cur_node.next
                cur_node = None
                return

            prev = None
            count = 0
            while cur_node and count != pos:
                prev = cur_node 
                cur_node = cur_node.next
                count += 1

            if cur_node is None:
                return 

            prev.next = cur_node.next
            cur_node = None
```

## Length

### len_iterative

Let’s look at a linked list and recall how we managed to print out the elements of a linked list. We iterate through every element of the linked list. We start from the head node and while we don’t reach None, we print the data field of the node that we point to and increment the while loop by setting the current node equal to the next node.

```python
def len_iterative(self):
    count = 0
    cur_node = self.head
    while cur_node:
        count += 1
        cur_node = cur_node.next
    return count
```

### len_recursive

```python
def len_recursive(self, node):
  if node is None:
    return 0
  return 1 + self.len_recursive(node.next)
```

# Exercise

## Node Swap

One way to solve this is by iterating the linked list and keeping track of certain pieces of information that are going to be helpful.

```python
def swap_nodes(self, key_1, key_2):

  if key_1 == key_2:
    return 

  prev_1 = None 
  curr_1 = self.head 
  while curr_1 and curr_1.data != key_1:
    prev_1 = curr_1 
    curr_1 = curr_1.next

  prev_2 = None 
  curr_2 = self.head 
  while curr_2 and curr_2.data != key_2:
    prev_2 = curr_2 
    curr_2 = curr_2.next

  if not curr_1 or not curr_2:
    return 

  if prev_1:
    prev_1.next = curr_2
  else:
    self.head = curr_2

  if prev_2:
      prev_2.next = curr_1
  else:
      self.head = curr_1

  curr_1.next, curr_2.next = curr_2.next, curr_1.next
```

## Reverse

### reverse_iterative

```python
def reverse_iterative(self):
  prev = None 
  cur = self.head
  while cur:
    nxt = cur.next
    cur.next = prev
    prev = cur 
    cur = nxt 
  self.head = prev
```

### reverse_recursive

```python
def reverse_recursive(self):

  def _reverse_recursive(cur, prev):
    if not cur:
      return prev

    nxt = cur.next
    cur.next = prev
    prev = cur 
    cur = nxt 
    return _reverse_recursive(cur, prev)

  self.head = _reverse_recursive(cur=self.head, prev=None)
```

## Merge Two Sorted Linked Lists

To solve this problem, we’ll use two pointers (p and q) which will each initially point to the head node of each linked list. There will be another pointer, s, that will point to the smaller value of data of the nodes that p and q are pointing to. Once s points to the smaller value of the data of nodes that p and q point to, p or q will move on to the next node in their respective linked list. If s and p point to the same node, p moves forward; otherwise q moves forward. The final merged linked list will be made from the nodes that s keeps pointing to.

```python
def merge_sorted(self, llist):

  p = self.head 
  q = llist.head
  s = None

  if not p:
      return q
  if not q:
      return p

  if p and q:
      if p.data <= q.data:
          s = p 
          p = s.next
      else:
          s = q
          q = s.next
      new_head = s 
  while p and q:
      if p.data <= q.data:
          s.next = p 
          s = p 
          p = s.next
      else:
          s.next = q
          s = q
          q = s.next
  if not p:
      s.next = q 
  if not q:
      s.next = p 
  return new_head
```

## Remove Duplicates

```python
def remove_duplicates(self):
  cur = self.head
  prev = None
  dup_values = dict()

  while cur:
    if cur.data in dup_values:
      # Remove node:
      prev.next = cur.next
      cur = None
    else:
      # Have not encountered element before.
      dup_values[cur.data] = 1
      prev = cur
    cur = prev.next
```

## Nth-to-Last Node

In this lesson, we are going to find how to get the Nth-to -Last Node from a linked list.

### by_length

```python
def print_nth_from_last(self, n):
  total_len = self.len_iterative()
  
  cur = self.head 
  while cur:
    if total_len == n:
      print(cur.data)
      return cur.data
    total_len -= 1
    cur = cur.next
  if cur is None:
    return
```

### by_pointers

```python
def print_nth_from_last(self, n):
    p = self.head
    q = self.head

    count = 0
    while q:
        count += 1
        if(count>=n):
            break
        q = q.next
        
    if not q:
        print(str(n) + " is greater than the number of nodes in list.")
        return

    while p and q.next:
        p = p.next
        q = q.next
    return p.data
```

## Count Occurrences

In this lesson, we investigate how to count the occurrence of nodes with a specified data element. We will consider how one may solve this problem in both an iterative and recursive manner, and we will code the solution to both of these approaches in Python.

As an example, have a look at the illustration below where we have a linked list with the following elements: 1 - 1 - 2 - 1
You can see that the number of occurrences of `1` in the linked list is `3`.

### iterative

```python
def count_occurences_iterative(self, data):
  count = 0
  cur = self.head
  while cur:
      if cur.data == data:
          count += 1
      cur = cur.next
  return count
```

### Recursive

```python
def count_occurences_recursive(self, node, data):
  if not node:
      return 0 
  if node.data == data:
      return 1 + self.count_occurences_recursive(node.next, data)
  else:
      return self.count_occurences_recursive(node.next, data)
```

## Rotate

In this lesson, we investigate how to rotate the nodes of a singly linked list around a specified pivot element. This implies shifting or rotating everything that follows the pivot node to the front of the linked list.

```python
def rotate(self, k):
  if self.head and self.head.next:
    p = self.head 
    q = self.head 
    prev = None
    count = 0
    
    while p and count < k:
        prev = p
        p = p.next 
        q = q.next 
        count += 1
    p = prev
    while q:
        prev = q 
        q = q.next 
    q = prev 

    q.next = self.head 
    self.head = p.next 
    p.next = None
```

## Is Palindrome

In this lesson, we investigate how to determine if a singly linked list is a palindrome, that is if the data held at each of the nodes in the linked list can be read forward from the head or backward from the tail to generate the same content. We will code the solution to both of these approaches in Python.

First of all, let’s learn what a palindrome is. A palindrome is a word or a sequence that is the same from the front as from the back. For instance, *racecar* and *radar* are palindromes. Examples of non-palindromes are *ABC*, *hello*, and *test*.

### by_string

```python
def is_palindrome(self):
  # Solution 1:
  s = ""
  p = self.head 
  while p:
    s += p.data
    p = p.next
  return s == s[::-1]
```

### by_stack

```python
def is_palindrome(self):
  # Solution 2:
  p = self.head
  s = []
  while p:
    s.append(p.data)
    p = p.next
  p = self.head
  while p:
    data = s.pop()
    if p.data != data:
      return False
    p = p.next
  return True
```

### by_two_pointers

```python
def is_palindrome(self):
  if self.head:
    p = self.head 
    q = self.head 
    prev = []
    
    i = 0
    while q:
      prev.append(q)
      q = q.next
      i += 1
    q = prev[i-1]

    count = 1

    while count <= i//2 + 1:
      if prev[-count].data != p.data:
        return False
      p = p.next
      count += 1
    return True
  else:
    return True
```

## Move Tail to Head

You are required to solve the Move Tail to Head problem in a linked list. In this exercise, you are supposed to move the tail (or last) node in a singly linked list to the front of the linked list so that it becomes the new head of the linked list.

```python
def move_tail_to_head(self):
  if self.head and self.head.next:
    last = self.head 
    second_to_last = None
    while last.next:
        second_to_last = last
        last = last.next
    last.next = self.head 
    second_to_last.next = None 
    self.head = last
```

## Sum Two Linked Lists

In this lesson, we investigate how to sum two singly linked lists.

```python
def sum_two_lists(self, llist):
  p = self.head  
  q = llist.head

  sum_llist = LinkedList()

  carry = 0
  while p or q:
      if not p:
          i = 0
      else:
          i = p.data
      if not q:
          j = 0 
      else:
          j = q.data
      s = i + j + carry
      if s >= 10:
          carry = 1
          remainder = s % 10
          sum_llist.append(remainder)
      else:
          carry = 0
          sum_llist.append(s)
      if p:
          p = p.next
      if q:
          q = q.next
  return sum_llist
```

# Singly Linked List Implementation

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        cur_node = self.head
        while cur_node:
            print(cur_node.data)
            cur_node = cur_node.next

    def append(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def prepend(self, data):
        new_node = Node(data)

        new_node.next = self.head
        self.head = new_node

    def insert_after_node(self, prev_node, data):

        if not prev_node:
            print("Previous node does not exist.")
            return 

        new_node = Node(data)

        new_node.next = prev_node.next
        prev_node.next = new_node

    def delete_node(self, key):

        cur_node = self.head

        if cur_node and cur_node.data == key:
            self.head = cur_node.next
            cur_node = None
            return

        prev = None 
        while cur_node and cur_node.data != key:
            prev = cur_node
            cur_node = cur_node.next

        if cur_node is None:
            return 

        prev.next = cur_node.next
        cur_node = None

    def delete_node_at_pos(self, pos):
        if self.head:
            cur_node = self.head

            if pos == 0:
                self.head = cur_node.next
                cur_node = None
                return

            prev = None
            count = 1
            while cur_node and count != pos:
                prev = cur_node 
                cur_node = cur_node.next
                count += 1

            if cur_node is None:
                return 

            prev.next = cur_node.next
            cur_node = None

    def len_iterative(self):

        count = 0
        cur_node = self.head

        while cur_node:
            count += 1
            cur_node = cur_node.next
        return count

    def len_recursive(self, node):
        if node is None:
            return 0
        return 1 + self.len_recursive(node.next)

    def swap_nodes(self, key_1, key_2):

        if key_1 == key_2:
            return 

        prev_1 = None 
        curr_1 = self.head 
        while curr_1 and curr_1.data != key_1:
            prev_1 = curr_1 
            curr_1 = curr_1.next

        prev_2 = None 
        curr_2 = self.head 
        while curr_2 and curr_2.data != key_2:
            prev_2 = curr_2 
            curr_2 = curr_2.next

        if not curr_1 or not curr_2:
            return 

        if prev_1:
            prev_1.next = curr_2
        else:
            self.head = curr_2

        if prev_2:
            prev_2.next = curr_1
        else:
            self.head = curr_1

        curr_1.next, curr_2.next = curr_2.next, curr_1.next

    def print_helper(self, node, name):
        if node is None:
            print(name + ": None")
        else:
            print(name + ":" + node.data)

    def reverse_iterative(self):

        prev = None 
        cur = self.head
        while cur:
            nxt = cur.next
            cur.next = prev
            
            self.print_helper(prev, "PREV")
            self.print_helper(cur, "CUR")
            self.print_helper(nxt, "NXT")
            print("\n")

            prev = cur 
            cur = nxt 
        self.head = prev

    def reverse_recursive(self):

        def _reverse_recursive(cur, prev):
            if not cur:
                return prev

            nxt = cur.next
            cur.next = prev
            prev = cur 
            cur = nxt 
            return _reverse_recursive(cur, prev)

        self.head = _reverse_recursive(cur=self.head, prev=None)

    def merge_sorted(self, llist):
    
        p = self.head 
        q = llist.head
        s = None
    
        if not p:
            return q
        if not q:
            return p

        if p and q:
            if p.data <= q.data:
                s = p 
                p = s.next
            else:
                s = q
                q = s.next
            new_head = s 
        while p and q:
            if p.data <= q.data:
                s.next = p 
                s = p 
                p = s.next
            else:
                s.next = q
                s = q
                q = s.next
        if not p:
            s.next = q 
        if not q:
            s.next = p 
        return new_head

    def remove_duplicates(self):
        
        cur = self.head
        prev = None

        dup_values = dict()

        while cur:
            if cur.data in dup_values:
                # Remove node:
                prev.next = cur.next
                cur = None
            else:
                # Have not encountered element before.
                dup_values[cur.data] = 1
                prev = cur
            cur = prev.next

    def print_nth_from_last(self, n, method):
        if method == 1:
            #Method 1:
            total_len = self.len_iterative()
            cur = self.head 
            while cur:
                if total_len == n:
                   #print(cur.data)
                    return cur.data
                total_len -= 1
                cur = cur.next
            if cur is None:
                return

        elif method == 2:
            # Method 2:
            p = self.head
            q = self.head

            count = 0
            while q:
                count += 1
                if(count>=n):
                    break
                q = q.next
                
            if not q:
                print(str(n) + " is greater than the number of nodes in list.")
                return

            while p and q.next:
                p = p.next
                q = q.next
            return p.data

    def rotate(self, k):
        if self.head and self.head.next:
            p = self.head 
            q = self.head 
            prev = None 
            count = 0
            
            while p and count < k:
                prev = p
                p = p.next 
                q = q.next 
                count += 1
            p = prev
            while q:
                prev = q 
                q = q.next 
            q = prev 

            q.next = self.head 
            self.head = p.next 
            p.next = None

    def count_occurences_iterative(self, data):
        count = 0
        cur = self.head
        while cur:
            if cur.data == data:
                count += 1
            cur = cur.next
        return count 

    def count_occurences_recursive(self, node, data):
        if not node:
            return 0 
        if node.data == data:
            return 1 + self.count_occurences_recursive(node.next, data)
        else:
            return self.count_occurences_recursive(node.next, data)

    def is_palindrome_1(self):
        # Solution 1:
        s = ""
        p = self.head 
        while p:
            s += p.data
            p = p.next
        return s == s[::-1]
    
    def is_palindrome_2(self):
        # Solution 2:
        p = self.head 
        s = []
        while p:
             s.append(p.data)
             p = p.next
        p = self.head
        while p:
            data = s.pop()
            if p.data != data:
                return False
            p = p.next
        return True
    
    def is_palindrome_3(self):
        if self.head:
            p = self.head 
            q = self.head 
            prev = []
            
            i = 0
            while q:
                prev.append(q)
                q = q.next
                i += 1
            q = prev[i-1]
        
            count = 1

            while count <= i//2 + 1:
                if prev[-count].data != p.data:
                    return False
                p = p.next
                count += 1
            return True
        else:
            return True

    def is_palindrome(self,method):
        if method == 1:
            return self.is_palindrome_1()
        elif method == 2:
            return self.is_palindrome_2()
        elif method == 3:
            return self.is_palindrome_3()

    def move_tail_to_head(self):
        if self.head and self.head.next:
            last = self.head 
            second_to_last = None
            while last.next:
                second_to_last = last
                last = last.next
            last.next = self.head 
            second_to_last.next = None 
            self.head = last
    
    def sum_two_lists(self, llist):
        p = self.head  
        q = llist.head

        sum_llist = LinkedList()

        carry = 0
        while p or q:
            if not p:
                i = 0
            else:
                i = p.data
            if not q:
                j = 0 
            else:
                j = q.data
            s = i + j + carry
            if s >= 10:
                carry = 1
                remainder = s % 10
                sum_llist.append(remainder)
            else:
                carry = 0
                sum_llist.append(s)
            if p:
                p = p.next
            if q:
                q = q.next
        sum_llist.print_list()
```


Additional materials:
* **[Udacity Linked List Exercises][udacity-liked-list]**

[udacity-liked-list]: https://github.com/michal0janczyk/udacity_data_structures_and_algorithms_nanodegree/tree/main/Data%20Structures/Arrays%20and%20Linked%20List/linked_lists
[liked-list-imp]: https://github.com/michal0janczyk/udacity_data_structures_and_algorithms_nanodegree/blob/main/Data%20Structures/Arrays%20and%20Linked%20List/linked_lists/Linked%20List%20Practice.ipynb
