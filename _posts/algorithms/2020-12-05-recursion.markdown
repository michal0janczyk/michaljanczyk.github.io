---
layout: post
title:  "Recursion"
date:   2020-12-05
category: Algorithms
tags: algorithms
---
Recursion...A recursive function occurs when a function that calls itself until a "base condition" is true, and execution stops.

Everyone knows it, no one uses it. I'm just kidding. Writing this post I was trying to remind myself when it was the last time I used it.
Two scenarios come to my mind. Both come from the times when I used to work for Ericsson. The first time was in my internship. My two friends and I were responsible for writing an automatic plate recognition system the supposed to be working internally on our parking lot. "It supposed to work" - that is a good statement. We used the recursion attitude for searching plates and matching the letters which ware found on the picture from CCTV. OMFG, you can't even imagine how slow it was. When we ware tried to run this on Raspberry Pi it crashes immediately. You how it is the first pancake is always spoiled. The second attempt was a little bit better because it was the self-healing system software framework for eNodeB or something like that.
Let's skip that part and focus on recursion.

**Recursion**
**How to explain what recursion is to 9 years old child?**
Imagine a three years old child. This child gets a task from parents to collect every Duplo brick from the floor and put it into the box. This problem seems to be complex from such a small kind, there are lots of bricks and no one knows how to perform all this overall. This problem seems to be complex for such a small kid, there are lots of bricks and no one knows how to perform all this overall. Despite limited child skills, the base case scenario which is "take one brick put it to the box" seems to be fairly easy. Our small hero instead of worrying about the complexity of the problem, carrying every brick one by one and after the whole floor is clean and parents are happy. It is unlikely that the child is aware it was working in recursion way. Let's distinguished two features that are specific for recursive algorithms.

1. The end of the algorithm is straightforward - when no bricks will leave on the floor, the task is done.
2. A large complex problem has been broken down into elementary problems that we can solve and which are much less complex than the initial problem.

Recursion way of thinking is very natural and a big percentage of humans world problems can be expressed using the recursive approach.

**What is the point of using recursion?**
We use a recursive technique to solve a problem by solving smaller copies of the same problem. /gif [mind blow]. A recursion is a different approach to iteration solution.
Everyone knows examples like the Fibonacci series or calculating factorial. So I will put something else here as an example.

**To make a recursion work properly we have to meet two conditions.**
1. There must exist one or more base cases where the solution is calculated directly without using recursion.
2. Caution! Very complicated! Each recursive procedure call must refer to a smaller copy of the same problem which will eventually lead to the base case.

**Where recursion is performed?**
Physically passing the parameters occurs through the stack. Special memory space that is used to store information needed during program execution and dynamic memory allocation.
A stack is a data structure that operates on a “Last In, First Out” basis. An item is “pushed” onto a stack to add to it, and an item is “popped” off the stack to remove it.

**Recursion with additional parameters**
This concept is so awesome. First, let's consider these two types of the factorial function, classic:
{% highlight cpp %}
int factorial(int n)
{
	if (n == 0) {
	    return 1;
	}
	else {
	    return factorial(n - 1) * n;
	}
}
{% endhighlight %}

With the additional parameter:
{% highlight python %}
int factorial(int n, int tmp = 1)
{
	if (n == 0) {
	    return tmp;
	}
	else {
	    return factorial(n - 1, n*temp);
	}
}
{% endhighlight %}

Not a big difference but it makes life easier. You don't believe me. Take a piece of paper and a pencil then try to draw a whole stack trace for both of these functions. The result will blow you away. Just to clarify. The aim of this is hidden in the execution of this program. Imagine the standard version of this function executes 10 times to calculate the result. It means that partial result has to be passed by another 10 levels up to its first copy. BTW: In the meantime, every level uses some part of memory which is frozen at that time. Function with the additional parameter will make everything more efficient. Because the additional parameter is used for calculating partial results of this function. There is no need to pass the elements in the way up through stack trace again. When the last call of the function will be invoked, the result will be calculated. How awesome is that?
Recursion is a great tool for performing inorder traversal. We’ll create a recursive function called traverse that can be called on a particular node. The function then performs the following steps:
1. Call itself (traverse) on the node’s left child if it has one.
2. Visit the node. (For our book title app, we print the value of the node at this step.)
3. Call itself (traverse) on the node’s right child if it has one.

For this recursive algorithm, the base case is when a node has no children, in which case we simply print the node’s title but do not call traverse again. If we called traverse on the “Moby Dick” node, we’d visit all the nodes of the tree in the order shown on the diagram on page 165. And that’s exactly how we can print out our list of book titles in alphabetical order. Note that tree traversal is O(N), since by definition, traversal visits every node of the tree.

Further resources:
- [Reading 10: Recursion](http://web.mit.edu/6.005/www/fa15/classes/10-recursion/)
