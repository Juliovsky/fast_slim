import { createApp } from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import VueGtag from "vue-gtag";
import router from "./router";
import "./assets/styles.scss";
import Vuelidate from "vuelidate";
import { vMaska } from "maska";
import Countdown from "vue3-flip-countdown";

const app = createApp(App);
app
  .use(VueSmoothScroll, {
    duration: 2000,
    updateHistory: false,
    offset: -200,
  })
  .use(VueGtag);

app.use(router).use(Countdown).use(Vuelidate).directive("maska", vMaska);
app.mount("#app");
