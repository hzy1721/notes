# Timsort

ES2019 后标准规定 `Array.prototype.sort` 必须是稳定的，具体使用的排序算法取决于实现。

V8 使用 **Timsort** 对元素进行排序，Timsort 是一种归并排序的变体。

| 排序算法 | 平均时间复杂度 | 最坏时间 | 最好时间 | 空间复杂度 | 稳定性 |
| -------- | -------------- | -------- | -------- | ---------- | ------ |
| 快速排序 | O(nlogn)       | O(n^2)   | O(nlogn) | O(logn)    | 不稳定 |
| 归并排序 | O(nlogn)       | O(nlogn) | O(nlogn) | O(n)       | 稳定   |
| 插入排序 | O(n^2)         | O(n^2)   | O(n)     | O(1)       | 稳定   |
| Timsort  | O(nlogn)       | O(nlogn) | O(n)     | O(n)       | 稳定   |

选择 Timsort 有以下原因：

- 优秀的时间复杂度：最坏 O(nlogn)、最好 O(n)
- 具有稳定性，能满足标准的要求

参考链接：

- https://v8.dev/blog/array-sort
- https://github.com/python/cpython/blob/main/Objects/listsort.txt
- https://github.com/python/cpython/blob/main/Objects/listobject.c
