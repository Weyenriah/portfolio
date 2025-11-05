import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faArrowDown, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

// Font Awesome Icons
library.add(faEnvelope, faLinkedin, faGithub, faArrowDown, faFileArrowDown);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(MotionPlugin);

app.mount("#app");
