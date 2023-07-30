# 买卖股票的最佳时机

“买卖股票的最佳时机” 是 LeetCode 上的一系列题目，包含 6 道题 (1~4、含手续费、含冷冻期)，属于比较常考的面试题。

输入给定一段连续时间内每一天的股票价格，每道题对股票的交易做出了各种限制，求能够获取的最大利润。

- 不能当天买入当天卖出 (相当于不交易)
- 最多持有一支股票，再次买入前需要卖出之前的股票

| 题目     |                  难度                   |   交易次数    |        其他约束         |   算法   |
| :------- | :-------------------------------------: | :-----------: | :---------------------: | :------: |
| I        | <span style="color: green">简单</span>  | 最多交易 1 次 |                         | 前缀最值 |
| II       | <span style="color: orange">中等</span> | 交易次数不限  |                         |   贪心   |
| III      |  <span style="color: red">困难</span>   | 最多交易 2 次 |                         | 动态规划 |
| IV       |  <span style="color: red">困难</span>   | 最多交易 k 次 |                         | 动态规划 |
| 含冷冻期 | <span style="color: orange">中等</span> | 交易次数不限  | 卖出股票后有 1 天冷冻期 | 动态规划 |
| 含手续费 | <span style="color: orange">中等</span> | 交易次数不限  |    每次交易有手续费     | 动态规划 |

## 买卖股票的最佳时机

由于只能买卖一次，对于第 i 天买入的股票，只需要在后续时间内股票价格最高时卖出即可。为了降低时间复杂度，可以从左往右遍历，记录目前为止最低的股票价格作为买入价格，依次计算如果今天卖出能得到的利润，求最大值就得到了题目要求的结果。

```ts
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let ans = 0;
  for (const price of prices) {
    ans = Math.max(ans, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }
  return ans;
}
```

- 时间复杂度：O(n)
- 空间复杂度：O(1)

## 买卖股票的最佳时机 II

由于不限制交易次数，可以每隔一天就尝试进行一次交易，如果相邻两天股票涨了，就进行一次交易。这种交易方式获得的利润是最高的，因为避免了所有的股票价格下跌。

```ts
function maxProfit(prices: number[]): number {
  let ans = 0;
  const n = prices.length;
  for (let i = 1; i < n; ++i) {
    if (prices[i] > prices[i - 1]) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
}
```

- 时间复杂度：O(n)
- 空间复杂度：O(1)

## 买卖股票的最佳时机 III

没有容易想到的解题思路时可以尝试用动态规划，每天记录 4 个状态：第 1 次买入的利润 buy1，第 1 次卖出的利润 sell1，第 2 次买入的利润 buy2，第 2 次卖出的利润 sell2。买入利润可以理解为买入股票价格的负值，计算卖出利润时再加上卖出股票的价格，每个状态在前一个状态的基础上进行更新。

```ts
function maxProfit(prices: number[]): number {
  const n = prices.length;
  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;
  for (let i = 1; i < n; ++i) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
}
```

- 时间复杂度：O(n)
- 空间复杂度：O(1)

## 买卖股票的最佳时机 IV

题目背景跟 III 很像，解法也类似，每天记录 2\*(k+1) 个状态，k 为最大交易次数，表示这一天第 0~k 次买入和卖出的利润。定义第 0 次交易是为了顺利计算 buy[1]，只会用到 sell[0] = 0。长度为 n 的数组最多有 n/2 次有效交易，因此可以在计算前尝试缩小 k 的值。

```ts
function maxProfit(k: number, prices: number[]): number {
  const n = prices.length;
  k = Math.min(k, Math.floor(n / 2));
  const buy: number[] = new Array(k + 1);
  const sell: number[] = new Array(k + 1);
  sell[0] = 0;
  for (let i = 1; i <= k; ++i) {
    buy[i] = Number.MIN_SAFE_INTEGER / 2;
    sell[i] = Number.MIN_SAFE_INTEGER / 2;
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 1; j <= k; ++j) {
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j] + prices[i]);
    }
  }
  return Math.max(...sell);
}
```

- 时间复杂度：O(nk)
- 空间复杂度：O(k)

## 最佳买卖股票时机含冷冻期

这道题的解法也可以类比 III，每天记录 3 个状态：当天买入的利润，当天卖出的利润，当天什么都不干的利润。买入利润需要从前一天什么都不干的利润转移 (确保不在冷冻期)，什么都不干的利润从前一天卖出的利润转移。最终的最大利润为最后一天卖出的利润和什么都不干的利润的最大值，因为前期卖出的最大利润可以通过什么都不干的利润转移到最后一天。

```ts
function maxProfit(prices: number[]): number {
  let buy = -prices[0];
  let sell = 0;
  let hot = 0;
  const n = prices.length;
  for (let i = 1; i < n; ++i) {
    [buy, sell, hot] = [
      Math.max(buy, hot - prices[i]),
      buy + prices[i],
      Math.max(sell, hot),
    ];
  }
  return Math.max(sell, hot);
}
```

- 时间复杂度：O(n)
- 空间复杂度：O(1)

## 买卖股票的最佳时机含手续费

这道题跟 ”含冷冻期“ 很像，不限制交易次数，但是不能用贪心，因为长期的收益有可能高于手续费。每天记录 2 个状态：当前买入的利润，当天卖出的利润。计算卖出利润时需要减去手续费。

```ts
function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  let buy = -prices[0];
  let sell = 0;
  for (let i = 1; i < n; ++i) {
    const buy2 = Math.max(buy, sell - prices[i]);
    const sell2 = Math.max(sell, buy + prices[i] - fee);
    buy = buy2;
    sell = sell2;
  }
  return sell;
}
```

- 时间复杂度：O(n)
- 空间复杂度：O(1)
