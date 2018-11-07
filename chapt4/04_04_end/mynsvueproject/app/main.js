import Vue from "nativescript-vue";

import App from "./components/App";

new Vue({
  components: { App },
  template: `
    <Frame>
      <App />
    </Frame>
  `
}).$start();
