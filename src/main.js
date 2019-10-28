import DefaultLayout from '~/layouts/Default.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import '~/styles/index.sass'



export default function (Vue) {
    Vue.component('Layout', DefaultLayout)

    Vue.use(VueGoogleMaps, {
        load: {
            key: "AIzaSyCb-vFfgzPHRqPM5KwvY0gMcJ5PXk7zg-A",
            libraries: "places" // necessary for places input
        }
    });
}
