---
layout: post
title:  "Singly Linked List"
date:   2020-11-28
category: Data Structures
tags: data_structure
---
We can distinguished three different types of linked lists:

- Singly Linked Lists
- Doubly Linked Lists
- Circular Linked List

Take a look at full implementation of **[Linked List][liked-list-imp]**.

A linked list is a data structure that represents a list of items, just like an array.

In fact, in any application in which you’re using an array, you could probably use a linked list instead. Under the hood, however, linked lists are implemented differently and can have different performance in varying situations.

Linked lists, on the other hand, do not consist of a bunch of memory cells in a row. Instead, they consist of a bunch of memory cells that are not next to each other, but can be spread across many different cells across the computer’s memory. These cells that are not adjacent to each other are known as nodes - the distribution is not contiguous.

## Arrays vs. Linked Lists

| Operation                                                                     | Arrays | Linked List |
|-------------------------------------------------------------------------------|--------|-------------|
| Insertion/Deletion at the beginning of the array or linked list given a value | O(n)   | O(1)        |
| Access Element                                                                | O(1)   | O(n)        |
| Contiguous Memory                                                             | Yes    | No          |

## Structure

Every linked list consists of nodes. Every node has two components:

1. Data
2. Next

The ***data*** component allows a node in the linked list to store an element of data that can be of any type or object.

The ***next*** component in every node is a pointer that points from one node to another.

The start of the linked list is referred to as the head. head is a pointer that points to the beginning of the linked list(first node), so if we want to traverse the linked list to obtain or access an element of the linked list, we’ll start from head and move along.
The last component of a singly linked list is a notion of null.

## Insertion/Deletion

If we are given an array and a value to insert at the beginning of an array. For insertion, we have to **shift** all the elements in the array to the right. The same is the case with the deletion of an element from the beginning of an array.

Inserting a node at the head of a linked list given the head node is a constant-time operation as we need to change the orientation of a few pointers.

## Accessing Elements

Accessing any element given an index in arrays is better than accessing nth elements in linked lists. It is a constant time operation to access elements in arrays. If given an array and an index, it can immediately give you the element at which the entry is stored. This is because arrays are contiguous.

It is easy to calculate. For example, in C/C++, an integer type takes up 4 bytes of memory to store the value, but in Python 3 an integer takes 14 bytes of space. Again, this extra space is used for housekeeping functions in the Python language.

Accessing an nth element in a linked list is an O(n) operation given that you have access to the head node of the linked list. If we want to access an element, we need to start from the head pointer and traverse the entire linked list before we can get to it. Iterate over the all nodes in linked list.

## Contiguous Memory

Arrays are contiguous in memory which allows the access time to be constant, whereas, in linked lists, you do not have the luxury of contiguous memory.

## Implementation

This is what a basic implementation of a linked list looks like.

```python
class Node:
 def __init__(self, data=None, next=None):
  self.data = data
  self.next = next

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

**append**

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

**prepend**

This method will insert an element at the beginning of the linked list.

```python
def prepend(self, data):
    new_node = Node(data)

    new_node.next = self.head
    self.head = new_node
```

**insert_after_node**

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

We can distinguish two ways of removing nodes. By means of values and by means of positions.

**by_value**

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

**by_position**

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

One of the basic paremters of a list is its length, which we can also circumscribe in two different ways. Recursive and iterative.

**len_iterative**

Linked list and recall how we managed to print out the elements of a linked list. We iterate through every element of the linked list. We start from the head node and while we don’t reach None, we print the data field of the node that we point to and increment the while loop by setting the current node equal to the next node.

```python
def len_iterative(self):
    count = 0
    cur_node = self.head
    while cur_node:
        count += 1
        cur_node = cur_node.next
    return count
```

**len_recursive**

Length of linked list calculated recursively, although trivially simple I would never have thought of it.

```python
def len_recursive(self, node):
  if node is None:
    return 0
  return 1 + self.len_recursive(node.next)
```

Additional materials:

- **[Udacity Linked List Exercises][udacity-liked-list]**

[udacity-liked-list]: https://github.com/michal0janczyk/udacity_data_structures_and_algorithms_nanodegree/tree/main/Data%20Structures/Arrays%20and%20Linked%20List/linked_lists
[liked-list-imp]: https://github.com/michal0janczyk/udacity_data_structures_and_algorithms_nanodegree/blob/main/Data%20Structures/Arrays%20and%20Linked%20List/linked_lists/Linked%20List%20Practice.ipynb
