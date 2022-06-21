import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faMagnifyingGlass, faChartSimple, faPlus, faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHouse, faMagnifyingGlass, faChartSimple, faPlus, faPlusSquare, faHeart)

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
