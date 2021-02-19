---
layout: post
title:  "List Exercise #1"
date:   2020-11-21
categories: Data Structure
---
#### Arrays #1 [Educative][educative-array]
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Name </th>
    <th class="tg-0pky">Notes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Remove Even Integers from List</td>
    <td class="tg-0pky">Naive method check if it is not even - modulo. If it is odd, the element is appended to a new list. List comprehension</td>
  </tr>
  <tr>
    <td class="tg-0pky">Merge Two Sorted Lists</td>
    <td class="tg-0pky">Two indices, then, compare the current elements of both. Next list.insert(i, elem). Append whatever is left of list2 to list1</td>
  </tr>
  <tr>
    <td class="tg-0pky">List of Products of All Elements</td>
    <td class="tg-0pky">Multiply everything by everything. From left side multiply every element. Then multiply everything from right side - for i in range(len(lst)-1, -1, -1)</td>
  </tr>
  <tr>
    <td class="tg-0pky">Find Minimum Value in List</td>
    <td class="tg-0pky">Sort. Iterative. Sort. Iterative. Merge sort, Split table by half, then recursive calls of merge sort. Two iterators foreach half. While loop to compare, iterate over the list indices. End find minimum</td>
  </tr>
  <tr>
    <td class="tg-0pky">Find Second Maximum Value in a List</td>
    <td class="tg-0pky">Initialize two variables max and secondmax to -inf. if the current element in the list is greater than the maximum value, then set secondmax to max and max to the current element</td>
  </tr>
  <tr>
    <td class="tg-0pky">Right Rotate List</td>
    <td class="tg-0pky">Pythonic k = k % len(lst)</td>
  </tr>
  <tr>
    <td class="tg-0pky">Rearrange Positive &amp; Negative Values</td>
    <td class="tg-0pky">Iterate over the entire list and, if we encounter a negative element, we simply swap it with the leftmost positive element</td>
  </tr>
  <tr>
    <td class="tg-0pky">Rearrange Sorted List in Max/Min Form</td>
    <td class="tg-0pky">lst[i] += (lst[maxIdx] % maxElem) * maxElem</td>
  </tr>
  <tr>
    <td class="tg-0pky">Maximum Sum Sublist</td>
    <td class="tg-0pky">Kadane’s Algorithm. currentmax for the current list index and a globalmax</td>
  </tr>
</tbody>
</table>

Additional materials:
* **[Udacity Arrays Exercises][udacity-array]**

[educative-array]: https://www.educative.io/module/lesson/data-structures-in-python/393G9ZlnOEQ
[udacity-array]: https://www.educative.io/module/lesson/data-structures-in-python/393G9ZlnOEQ
