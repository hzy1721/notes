# 分治

## 合并K个升序链表

```ts
const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (!list1 || !list2) {
    return list1 ?? list2;
  }
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
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const n = lists.length;
  for (let span = 1; span < n; span *= 2) {
    for (let i = 0; i + span < n; i += span * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + span]);
    }
  }
  return lists[0] ?? null;
}
```
