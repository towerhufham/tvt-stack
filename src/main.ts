import { createApp } from "vue"
import "./normalize.css"
import "./styles.css"
import App from "./App.vue"
import { createPinia } from "pinia"
import { createMemoryHistory, createRouter } from "vue-router"

const pinia = createPinia()

import TestPage from "./pages/TestPage.vue"

const routes = [
  { path: "/", component: TestPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(pinia).use(router).mount("#app")
