const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const subdomain = require('express-subdomain');

const app = express();
const BASE_HOST = "http://localhost"

app.use(cors());
app.use(express.json());

app.use(subdomain('billing', proxy(':8001'))) // proxy to billing service
app.use(subdomain('blog', proxy(`${BASE_HOST}:8002`))) // proxy to blog service
app.use(subdomain('cart', proxy(`${BASE_HOST}:8003`))) // proxy to cart service
app.use(subdomain('catalog', proxy(`${BASE_HOST}:8004`))) // proxy to catalog service
app.use(subdomain('inventory', proxy(`${BASE_HOST}:8005`))) // proxy to inventory service
app.use(subdomain('orders', proxy(`${BASE_HOST}:8006`))) // proxy to orders service
app.use(subdomain('payments', proxy(`${BASE_HOST}:8007`))) // proxy to payments service
app.use(subdomain('products', proxy(`${BASE_HOST}:8008`))) // proxy to products service
app.use(subdomain('stores', proxy(`${BASE_HOST}:8009`))) // proxy to stores service
app.use(subdomain('user', proxy(`${BASE_HOST}:8010`))) // proxy to user service
app.use(subdomain('wishlist', proxy(`${BASE_HOST}:8011`))) // proxy to wishlist service

app.listen(80, () => {
    console.log('Gateway is Listening to Port 80')
})