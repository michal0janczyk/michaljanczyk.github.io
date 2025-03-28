---
layout: post
title:  "Big O notation"
date:   2025-03-19
category: Algorithms
tags: algorithms
---

In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.[3] In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem. Big O notation is also used in many other fields to provide similar estimates.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;
  padding:10px 5px;word-break:normal;}
.tg th{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-zda1{border-color:inherit;font-family:Arial, Helvetica, sans-serif !important;;text-align:center;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-zda1">Case</th>
    <th class="tg-zda1" colspan="3">Average cases</th>
    <th class="tg-zda1" colspan="3">Worst cases</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-zda1">Data Structures</td>
    <td class="tg-zda1">Insert</td>
    <td class="tg-zda1">Delete</td>
    <td class="tg-zda1">Search</td>
    <td class="tg-zda1">Insert</td>
    <td class="tg-zda1">Delete</td>
    <td class="tg-zda1">Search</td>
  </tr>
  <tr>
    <td class="tg-zda1">Array/Stack/Queue</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
  </tr>
  <tr>
    <td class="tg-zda1">Linked List</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
  </tr>
  <tr>
    <td class="tg-zda1">Doubly Linked List</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
  </tr>
  <tr>
    <td class="tg-zda1">Hash Table</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(1)</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(n)</td>
  </tr>
  <tr>
    <td class="tg-zda1">Binary Search Tree</td>
    <td class="tg-zda1">O(log(n))</td>
    <td class="tg-zda1">O(log(n))</td>
    <td class="tg-zda1">O(log(n))</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(n)</td>
    <td class="tg-zda1">O(n)</td>
  </tr>
</tbody>
</table>
