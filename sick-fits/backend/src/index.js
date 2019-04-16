require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');
const db = require('./db');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const server = createServer();

// TODO Use express middlware to handle cookies (JWT)
// TODO Use express middlware to populate current user

app
  .prepare()
  .then(() => {
    server.get('/item/:id', (req, res) => {
      const actualPage = '/item';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.start(
        {
          cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
          }
        },
        deets => {
          console.log(
            `Server is now running on port http:/localhost:${
              deets.port
            }`
          );
        }
      );
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });


