# vue-directive-hoist [![license](https://img.shields.io/github/license/tserkov/vue-directive-hoist.svg)]()
A Vue directive for hoisting DOM elements to a higher parent node.

## Install

``` bash
# npm
npm install --save-dev vue-directive-hoist
```

``` bash
# yarn
yarn add --dev vue-directive-hoist
```

## Use

```javascript
// In main.js
import Hoist from 'vue-directive-hoist';

Vue.use(Hoist);
```

```html
<!-- In a component -->
<template>
  <div class="modal" v-hoist>
    <div class="modal-content">
      <p>
        A common use case for hoist is to place modals as a direct descendant of body,
        so it can properly overlay the page.
      </p>
    </div>
  </div>
</template>
```

If no value is provided, by default the element is hoisted to `<body>`.
