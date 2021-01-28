---
layout: post
title:  "Linked Lists"
date:   2020-11-27 19:44:15 +0100
categories: Data Structure
---
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

[Arrays vs. Linked Lists](https://www.notion.so/ffd75ca90f5d45c6853fd941a40d7771)

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

### `append`

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

### `prepend`

This method will insert an element at the beginning of the linked list.

```python
def prepend(self, data):
    new_node = Node(data)

    new_node.next = self.head
    self.head = new_node
```

### `insert_after_node`

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

### `by_value`

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

### `by_position`

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

### `len_iterative`

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

### `len_recursive`

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

### `reverse_iterative`

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

### `reverse_recursive`

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

Additional materials:
* **[Udacity Linked List Exercises][udacity-liked-list]**

[udacity-liked-list]: https://github.com/michal0janczyk/udacity_data_structures_and_algorithms_nanodegree/tree/main/Data%20Structures/Arrays%20and%20Linked%20List/linked_lists
[liked-list-imp]: https://github.com/michal0janczyk/udacity_data_structures_and_algorithms_nanodegree/blob/main/Data%20Structures/Arrays%20and%20Linked%20List/linked_lists/Linked%20List%20Practice.ipynb
