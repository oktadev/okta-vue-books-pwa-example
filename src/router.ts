import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Details from './views/Details.vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-322018.oktapreview.com/oauth2/default',
  client_id: '{ClientId}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
});

const authGuard = async function(to:any, from: any, next: (arg?:boolean)=>void) {
  console.log(to);
  const authenticated = await router.app.$auth.isAuthenticated();
  if (authenticated) {
    next();
  } else {
    router.app.$auth.loginRedirect(to.path);
    next(false);
  }
}

Vue.use(Router)

const router:any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: authGuard
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      beforeEnter: authGuard
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    }
  ]
} as any)

export default router;
