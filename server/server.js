const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 5000;

// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  users: 640,
  categories: 640,
  justForYou: 640,
  flashSale: 640,
  product: 640,
});

// You must apply the auth middleware before the router
app.use(auth);
app.use(rules);
app.use(router);
app.use(middlewares);

app.listen(PORT, () => {
  console.log('JSON Server is running');
});
