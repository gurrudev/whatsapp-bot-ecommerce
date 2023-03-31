# whatsapp-bot-ecommerce

📦Install

```sh
$ npm install
```

💻Usage

```js
// make the changes in the sample.env.js
const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    Meta_WA_VerifyToken: process.env.Meta_WA_VerifyToken,
    Meta_WA_accessToken: process.env.Meta_WA_accessToken,
    Meta_WA_SenderPhoneNumberId: process.env.Meta_WA_SenderPhoneNumberId,
    Meta_WA_wabaId: process.env.Meta_WA_wabaId,
};
```

🚀Start

```sh
$ npm run dev
    or
$ pm2 start app.js
    or
$ npm start
```
