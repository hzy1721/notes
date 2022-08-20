# 轮播图

```html
<div id="my-slider" class="slider-list">
  <ul>
    <li class="slider-list__item--selected">
      <img src="https://p5.ssl.qhimg.com/t0119c74624763dd070.png" />
    </li>
    <li class="slider-list__item">
      <img src="https://p4.ssl.qhimg.com/t01adbe3351db853eb3.jpg" />
    </li>
    <li class="slider-list__item">
      <img src="https://p2.ssl.qhimg.com/t01645cd5ba0c3b60cb.jpg" />
    </li>
    <li class="slider-list__item">
      <img src="https://p4.ssl.qhimg.com/t01331ac159b58f5478.jpg" />
    </li>
  </ul>
  <a class="slide-list__next"></a>
  <a class="slide-list__previous"></a>
  <div class="slide-list__control">
    <span class="slide-list__control-buttons--selected"></span>
    <span class="slide-list__control-buttons"></span>
    <span class="slide-list__control-buttons"></span>
    <span class="slide-list__control-buttons"></span>
  </div>
</div>
```

```css
#my-slider {
  position: relative;
  width: 790px;
}

.slider-list ul {
  list-style-type: none;
  position: relative;
  padding: 0;
  margin: 0;
}

.slider-list__item,
.slider-list__item--selected {
  position: absolute;
  transition: opacity 1s;
  opacity: 0;
  text-align: center;
}

.slider-list__item--selected {
  transition: opacity 1s;
  opacity: 1;
}
```

```js
class Slider {
  constructor(id) {
    this.container = document.getElementById(id);
    this.items = this.container.querySelectorAll(
      ".slider-list__item, .slider-list__item--selected"
    );
  }
  getSelectedItem() {
    const selected = this.container.querySelector(
      ".slider-list__item--selected"
    );
    return selected;
  }
  getSelectedItemIndex() {
    return Array.from(this.items).indexOf(this.getSelectedItem());
  }
  slideTo(idx) {
    const selected = this.getSelectedItem();
    if (selected) {
      selected.className = "slider-list__item";
    }
    const item = this.items[idx];
    if (item) {
      item.className = "slider-list__item--selected";
    }
  }
  slideNext() {
    const currentIdx = this.getSelectedItemIndex();
    const nextIdx = (currentIdx + 1) % this.items.length;
    this.slideTo(nextIdx);
  }
  slidePrevious() {
    const currentIdx = this.getSelectedItemIndex();
    const previousIdx =
      (this.items.length + currentIdx - 1) % this.items.length;
    this.slideTo(previousIdx);
  }
}

const slider = new Slider("my-slider");
setInterval(() => {
  slider.slideNext();
}, 2000);
```
