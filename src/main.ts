import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const app = createApp(App);

// Font Awesome Icons
library.add(faEnvelope, faLinkedin, faGithub);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
