# 点击 button 把 input 内容 alert

```html
<div id="app">
  <button @click="clickHandler">Button</button>
  <input type="text" v-model="text" />
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script>
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        text: "",
      };
    },
    methods: {
      clickHandler() {
        alert(this.text);
      },
    },
  }).mount("#app");
</script>
```
