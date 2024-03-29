# 链表

## 反转链表

```ts
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
}
```

## 环形链表

```ts
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
```

## 环形链表 II

```ts
function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
```

## 相交链表

```ts
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }
  let currA = headA;
  let currB = headB;
  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }
  return currA;
}
```

## 回文链表

```ts
function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }
  let prev: ListNode | null = null;
  while (slow) {
    [slow.next, prev, slow] = [prev, slow, slow.next];
  }
  [slow, fast] = [head, prev];
  while (fast) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
}
```

## 两数相加

```ts
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let p1 = l1;
  let p2 = l2;
  const dummyHead = new ListNode();
  let p3 = dummyHead;
  let carry = 0;
  while (p1 || p2) {
    let sum = carry;
    sum += p1?.val ?? 0;
    sum += p2?.val ?? 0;
    p3.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    p1 = p1?.next;
    p2 = p2?.next;
    p3 = p3.next;
  }
  if (carry > 0) {
    p3.next = new ListNode(carry);
  }
  return dummyHead.next;
}
```

## 删除链表的倒数第 N 个结点

```ts
function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let p1 = dummyHead;
  let p2 = head;
  for (let i = 0; i < n; ++i) {
    p2 = p2.next;
  }
  while (p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p1.next = p1.next.next;
  return dummyHead.next;
}
```

## 合并两个有序链表

```ts
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let p1 = list1;
  let p2 = list2;
  const dummyHead = new ListNode();
  let p3 = dummyHead;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      p3.next = p1;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p2 = p2.next;
    }
    p3 = p3.next;
  }
  p3.next = p1 ?? p2;
  return dummyHead.next;
}
```

## 排序链表

```ts
function merge(head1: ListNode | null, head2: ListNode | null) {
  let p1 = head1;
  let p2 = head2;
  const dummyHead = new ListNode();
  let p3 = dummyHead;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      p3.next = p1;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p2 = p2.next;
    }
    p3 = p3.next;
  }
  p3.next = p1 ?? p2;
  return dummyHead.next;
}

function mergeSort(head: ListNode | null, tail: ListNode | null) {
  if (head === tail) {
    return null;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next === tail ? fast.next : fast.next.next;
  }
  const left = mergeSort(head, slow);
  const right = mergeSort(slow, tail);
  return merge(left, right);
}

function sortList(head: ListNode | null): ListNode | null {
  return mergeSort(head, null);
}
```
