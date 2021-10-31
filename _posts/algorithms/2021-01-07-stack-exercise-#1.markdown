---
layout: post
title:  "Stack Exercise #1"
date:   2021-01-07 
category: Algorithms
tags: algorithms
---
#### Determine if Brackets are Balanced

We’re going to determine whether or not a set of brackets are balanced or not by making use of the stack data structure.

A balanced set off brackets is one where the number and type of opening and closing brackets match and that is also properly nested within the string of brackets.

Examples of Balanced Brackets: ( ( { } ) )

Examples of Unbalanced Brackets: [][][[] ]]]

```python
def equation_checker(equation):
    stack = Stack()
    for char in equation:
        if char in "(":
            stack.push(char)
        elif char == ")":
            if stack.pop() == None:
                return False

    if stack.size() == 0:
        return True
    else:
        return False
```
An advanced version that can differentiate between all corner cases like ((.
```python
def is_match(p1, p2):
    if p1 == "(" and p2 == ")":
        return True
    elif p1 == "{" and p2 == "}":
        return True
    elif p1 == "[" and p2 == "]":
        return True
    else:
        return False

def is_paren_balanced(paren_string):
    s = Stack()
    is_balanced = True
    index = 0

    while index < len(paren_string) and is_balanced:
        paren = paren_string[index]
        if paren in "([{":
            s.push(paren)
        else:
            if s.is_empty():
                is_balanced = False
            else:
                top = s.pop()
                if not is_match(top, paren):
                    is_balanced = False
        index += 1

    if s.is_empty() and is_balanced:
        return True
    else:
        return False
```

#### Reverse String

In pythonic way:

```python
input_str = "Test"
print(input_str[::-1])
```

Using stack. We push all the characters of the string onto the stack, and due to the First-In, Last-Out property of stack, we get all the characters in reverse order when we pop them off the stack.

```python
def reverse_string(input_str):
    stack = Stack()
    result = ""

    for i in range(len(input_str)):
        stack.push(input_str[i])

    while not stack.is_empty():
        result += stack.pop()
    return result
```

#### Convert Decimal Integer to Binary

The following code helps us to evaluate whether our implementation is correct or not:

```
  print(int(convert_int_to_bin(56),2)==56)
```

In this problem, the First-In, Last-Out property of the stack has enabled us to store the binary bits from the MSB (Most Significant Bit) to the LSB (Least Significant Bit), although we get the values in reverse order by the division by 2 method.

```python
def convert_int_to_bin(dec_num):
    stack = Stack()
    while dec_num > 0:
        remainder = dec_num % 2
        stack.push(remainder)
        dec_num = dec_num // 2

    bin_num = ""
    while not stack.is_empty():
        bin_num += str(stack.pop())
    return bin_num
```
