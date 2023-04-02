import { createApp } from "vue";
import "./style/style.scss";
import App from "./App.vue";
import ThreeCanvas from "./components/ThreeCanvas.vue";

const app = createApp(App);
app.component("ThreeCanvas", ThreeCanvas);
app.mount("#app");
