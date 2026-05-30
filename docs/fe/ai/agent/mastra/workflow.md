# Workflow

Mastra 工作流由 step / state 组成，支持 start / stream 两种执行模式，支持挂起继续执行、断线重启。

## 术语表

| 概念     | 含义                             |
| -------- | -------------------------------- |
| workflow | 工作流                           |
| step     | 工作流中的一个步骤               |
| state    | 工作流共享数据，所有 step 可读写 |
| run      | 工作流的一次执行                 |

## step

创建 step：

```ts
import { createStep } from '@mastra/core/workflows';
import { z } from 'zod';

export type UserTier = {
  'user-tier': 'enterprise' | 'pro';
};

const step1 = createStep({
  id: 'step-1',
  inputSchema: z.object({ message: z.string() }),
  outputSchema: z.object({ formatted: z.string() }),
  stateSchema: z.object({ counter: z.number() }),
  execute: async ({ inputData, state, setState, requestContext }) => {
    // Read from state
    console.log(state.counter);

    // Update state for subsequent steps
    setState({ ...state, counter: state.counter + 1 });

    const userTier = requestContext.get('user-tier') as UserTier['user-tier'];

    const maxResults = userTier === 'enterprise' ? 1000 : 50;

    return { formatted: inputData.message.toUpperCase(), maxResults };
  },
});
```

## workflow

创建 workflow 并接入 step：

```ts
import { createWorkflow, createStep } from "@mastra/core/workflows";
import { z } from "zod";

const step1 = createStep({...});

export const testWorkflow = createWorkflow({
  id: "test-workflow",
  inputSchema: z.object({
    message: z.string()
  }),
  outputSchema: z.object({
    output: z.string()
  })
})
  .then(step1)
  .commit();
```

### 子 workflow

```ts
const step1 = createStep({...});
const step2 = createStep({...});

const childWorkflow = createWorkflow({
  id: "child-workflow",
  inputSchema: z.object({
    message: z.string()
  }),
  outputSchema: z.object({
    emphasized: z.string()
  })
})
  .then(step1)
  .then(step2)
  .commit();

export const testWorkflow = createWorkflow({
  id: "test-workflow",
  inputSchema: z.object({
    message: z.string()
  }),
  outputSchema: z.object({
    emphasized: z.string()
  })
})
  .then(childWorkflow)
  .commit();
```

### 复制 workflow

```ts
import { cloneWorkflow } from "@mastra/core/workflows";

const step1 = createStep({...});

const parentWorkflow = createWorkflow({...})
const clonedWorkflow = cloneWorkflow(parentWorkflow, { id: "cloned-workflow" });

export const testWorkflow = createWorkflow({...})
  .then(step1)
  .then(clonedWorkflow)
  .commit();
```

### 注册/引用 workflow

```ts
import { Mastra } from '@mastra/core/mastra';
import { testWorkflow } from './workflows/test-workflow';

export const mastra = new Mastra({
  workflows: { testWorkflow },
});

const testWorkflow = mastra.getWorkflow('testWorkflow');
```

## run

workflow 支持两种执行模式：

- `start`：所有 step 执行完成后再返回结果
- `stream`：一边执行一边流式返回中间结果

### start 模式

```ts
const run = await testWorkflow.createRun();

const result = await run.start({
  inputData: {
    message: 'Hello world',
  },
});

if (result.status === 'success') {
  console.log(result.result);
}
```

### stream 模式

```ts
const run = await testWorkflow.createRun();

const stream = run.stream({
  inputData: {
    message: 'Hello world',
  },
});

for await (const chunk of stream.fullStream) {
  console.log(chunk);
}

// Get the final result (same type as run.start())
const result = await stream.result;

if (result.status === 'success') {
  console.log(result.result);
}
```

### 断线重启

```ts
// 重启所有 run
workflow.restartAllActiveWorkflowRuns();

// 重启指定 run
const run = await workflow.createRun();

const result = await run.start({ inputData: { value: 'initial data' } });

const restartedResult = await run.restart();

// 获取 active 的 workflow
const activeRuns = await workflow.listActiveWorkflowRuns();
if (activeRuns.runs.length > 0) {
  console.log(activeRuns.runs);
}
```
