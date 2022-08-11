# 水平/垂直居中

## 水平居中

1. `text-align: center;`
2. `width: 100px; margin: 0 atuo;`
3. `display: flex; justify-content: center;`
4. `position: absolute; left: 50%; transform: translateX(-50%);`
5. `position: absolute; left: 0; right: 0; margin: 0 auto;`
6. `position: absolute; width: 100px; left: calc(50% - 50px);`
7. `position: absolute; width: 100px; left: 50%; margin-left: -50px;`

## 垂直居中

1. `height: 10px; line-height: 10px;`
2. `display: flex; align-items: center;`
3. `display: inline-block; vertical-align: middle;`
4. `display: table-cell; vertical-align: middle;`
5. `position: absolute; top: 50%; transform: translateY(-50%);`
6. `position: absolute; top: 0; bottom: 0; margin: auto 0;`
7. `position: absolute; height: 100px; top: calc(50% - 100px);`
8. `position: absolute; height: 100px; top: 50%; margin-top: -100px;`