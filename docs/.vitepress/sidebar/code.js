export default [
  {
    text: '数据结构',
    items: [
      { text: '数组', link: '/code/ds/array' },
      { text: '字符串', link: '/code/ds/string' },
      { text: '链表', link: '/code/ds/list' },
      { text: '栈', link: '/code/ds/stack' },
      { text: '单调栈', link: '/code/ds/monotonic-stack' },
      { text: '单调队列', link: '/code/ds/monotonic-queue' },
      {
        text: '二叉树遍历',
        link: '/code/ds/binary-tree-traverse',
      },
      {
        text: '二叉树层序遍历',
        link: '/code/ds/binary-tree-level-order',
      },
      { text: '二叉树递归', link: '/code/ds/binary-tree-recursive' },
      { text: '二叉树 DFS', link: '/code/ds/binary-tree-dfs' },
      { text: '二叉搜索树', link: '/code/ds/bst' },
      { text: '字典树', link: '/code/ds/trie' },
      { text: '平衡二叉树', link: '/code/ds/avl' },
      { text: '哈希表', link: '/code/ds/hash-table' },
      { text: '图：拓扑排序', link: '/code/algorithm/topo-sort' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '算法：基础',
    items: [
      { text: '模拟', link: '/code/algorithm/simulation' },
      { text: '数学', link: '/code/algorithm/math' },
      { text: '位运算', link: '/code/algorithm/bit-operation' },
      { text: '二分查找', link: '/code/algorithm/binary-search' },
      { text: '排序算法', link: '/code/algorithm/sort' },
      { text: '排序题目', link: '/code/algorithm/sort-based' },
      { text: '快速排序', link: '/code/algorithm/quick-sort' },
      { text: '前缀和', link: '/code/algorithm/presum' },
      { text: '双指针', link: '/code/algorithm/double-pointer' },
      { text: '分治', link: '/code/algorithm/divide-and-conquer' },
      { text: '贪心', link: '/code/algorithm/greedy' },
      { text: '滑动窗口', link: '/code/algorithm/sliding-window' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '算法：搜索+DP',
    items: [
      { text: 'DFS', link: '/code/algorithm/dfs' },
      { text: 'BFS', link: '/code/algorithm/bfs' },
      { text: '动态规划', link: '/code/algorithm/dp' },
      { text: '背包', link: '/code/algorithm/pack' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '算法：系列题',
    items: [
      { text: 'N 数之和', link: '/code/algorithm/nsum' },
      { text: '买卖股票的最佳时机', link: '/code/algorithm/stock' },
      { text: '打家劫舍', link: '/code/algorithm/rob' },
      { text: '路径总和', link: '/code/algorithm/path-sum' },
      { text: 'Excel 表', link: '/code/algorithm/excel' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '算法：一题多解',
    items: [{ text: '接雨水', link: '/code/algorithm/trapping-rain' }],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '算法：其他',
    items: [
      { text: 'LRU', link: '/code/algorithm/lru' },
      { text: '摩尔投票法', link: '/code/algorithm/moore' },
      { text: '数飞机', link: '/code/algorithm/count-plane' },
      { text: '连连看', link: '/code/algorithm/link-game' },
      { text: '时分针夹角', link: '/code/algorithm/clock-angle' },
    ],
    collapsible: true,
    collapsed: true,
  },
  {
    text: '前端手写题',
    items: [
      { text: '数组', link: '/code/fe/array' },
      { text: 'URL', link: '/code/fe/url' },
      { text: '正则', link: '/code/fe/regexp' },
      { text: 'Promise', link: '/code/fe/promise' },
      { text: '并发请求', link: '/code/fe/concurrent-requests' },
      { text: '有序数组去重', link: '/code/fe/sorted-array-unique' },
      { text: 'EventBus', link: '/code/fe/eventbus' },
      { text: '手写 new', link: '/code/fe/new' },
      { text: 'JSON 节点路径', link: '/code/fe/json-node-path' },
      { text: '手写 setInterval', link: '/code/fe/setinterval' },
      { text: 'DOM 转对象', link: '/code/fe/dom-to-object' },
      {
        text: 'n 个异步操作按序执行',
        link: '/code/fe/async-serial-execution',
      },
      { text: '手写 class 继承', link: '/code/fe/class-extends' },
      { text: '手写 bind', link: '/code/fe/bind' },
      {
        text: '检测对象循环引用',
        link: '/code/fe/detect-object-cycle',
      },
      { text: '层级关系转换', link: '/code/fe/hierarchy' },
    ],
    collapsible: true,
    collapsed: true,
  },
];
