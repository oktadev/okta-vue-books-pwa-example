# Vue + TypeScript => PWA 💚💙
 
This example app shows how to build a PWA with Vue and TypeScript.

Please read [Build Your First PWA with Vue and TypeScript](https://developer.okta.com/blog/2019/05/30/vue-pwa-typescript) to see how this app was created.

**Prerequisites:** [Node.js](https://nodejs.org/). 

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-vue-books-pwa-example.git
cd okta-vue-books-pwa-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start the app, run:
 
```bash
npm install && vue serve
```

### Create a New OIDC App in Okta

If you don't have an Okta developer account, please [create one](https://developer.okta.com/signup/). Then, create a new OIDC app on Okta:

1. Log in to your developer account, navigate to **Applications** > **Add Application**.
3. Select **Single-Page App** > **Next**. 
4. Give the application a name and click **Done**.

Set the `issuer` and copy the `clientId` into `src/router.ts`.

```typescript
Vue.use(Auth, {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  client_id: '{clientId}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
});
```

## Links

This example uses the following open source libraries from Okta:

* [Okta Vue SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue#readme)

## Help

Please post any questions as commnets on the [blog post](https://developer.okta.com/blog/2019/05/30/vue-pwa-typescript) or ask them on the [Okta Developer Forums](https://devforum.okta.com/). Our whole team monitors this channel and will see your questions. You can also enter them as issues on this project or ask them on Stack Overflow and add the `okta` tag.

## License

Apache 2.0, see [LICENSE](LICENSE).
