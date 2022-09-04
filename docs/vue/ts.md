# TS 支持

## props

```ts
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number,
});

const props = defineProps<{
  foo: string;
  bar?: number;
}>();

interface Props {
  foo: string;
  bar?: number;
}
const { foo, bar = 100 } = defineProps<Props>();
```

## emits

```ts
const emit = defineEmits(['change', 'update']);

const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();
```

## ref

```ts
const year = ref(2020);

const year: Ref<string | number> = ref('2020');

const year = ref<string | number>('2020');

const n = ref<number>();
```

## reactive

```ts
const book = reactive({ title: 'Vue 3 指引' });

interface Book {
  title: string;
  year?: number;
}
const book: Book = reactive({ title: 'Vue 3 指引' });
```

## computed

```ts
const count = ref(0);
const double = computed(() => count.value * 2);

const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
});
```

## 事件处理函数

```ts
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value);
}
```

## provide/inject

```ts
const key = Symbol() as InjectionKey<string>;
provide(key, 'foo'); // 若提供的是非字符串值会导致错误

const foo = inject<string>('foo'); // 类型：string | undefined
const foo = inject<string>('foo', 'bar'); // 类型：string
const foo = inject('foo') as string;
```

## 模板引用

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const el = ref<HTMLInputElement | null>(null);

onMounted(() => {
  el.value?.focus();
});
</script>

<template>
  <input ref="el" />
</template>
```

## 组件引用

```vue
<!-- MyModal.vue -->
<script setup lang="ts">
import { ref } from 'vue';

const isContentShown = ref(false);
const open = () => (isContentShown.value = true);

defineExpose({
  open,
});
</script>
```

```vue
<!-- App.vue -->
<script setup lang="ts">
import MyModal from './MyModal.vue';

const modal = ref<InstanceType<typeof MyModal> | null>(null);

const openModal = () => {
  modal.value?.open();
};
</script>
```
