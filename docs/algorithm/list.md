# 链表

## 判断是否有环

```ts
function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
```

## 两个链表的交点

```js
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if (!headA || !headB)
            return nullptr;
        ListNode *currA = headA, *currB = headB;
        while (currA != currB) {
            currA = (currA ? currA->next : headB);
            currB = (currB ? currB->next : headA);
        }
        return currA;
    }
};
```
