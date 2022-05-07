import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageOneView from '../views/PageOneView.vue'
import PageTwoView from '../views/PageTwoView.vue'
import PageThreeView from '../views/PageThreeView.vue'
import PageFourView from '../views/PageFourView.vue'
import PageFiveView from '../views/PageFiveView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Dashboard - eMedipay App'
                /*
                metaTags: [{
                        name: 'description',
                        content: 'The home page of our example app.'
                    },
                    {
                        property: 'og:description',
                        content: 'The home page of our example app.'
                    }
                ] */
        }
    },
    {
        path: '/page-one',
        name: 'page-one',
        component: PageOneView,
        meta: {
            title: 'Page One - eMedipay App'
        }
    },
    {
        path: '/page-two',
        name: 'page-two',
        component: PageTwoView,
        meta: {
            title: 'Page Two - eMedipay App'
        }
    },
    {
        path: '/page-three',
        name: 'page-three',
        component: PageThreeView,
        meta: {
            title: 'Page Three - eMedipay App'
        }
    },
    {
        path: '/page-four',
        name: 'page-four',
        component: PageFourView,
        meta: {
            title: 'Page Four - eMedipay App'
        }
    },
    {
        path: '/page-five',
        name: 'page-five',
        component: PageFiveView,
        meta: {
            title: 'Page Five - eMedipay App'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next()

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta')

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key])
            })

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '')

            return tag
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag))

    next()
})

// ...

export default router