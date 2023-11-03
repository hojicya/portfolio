import "./styles/app.scss";

import { createApp } from "vue";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";
import VueKinesis from "vue-kinesis";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueAnimXyz);
app.use(VueKinesis);
app.use(router);

app.mount("#app");
