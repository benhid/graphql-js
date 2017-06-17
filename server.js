import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './schema';

const port = 1234;
const app = express ();

app.use('/graphql', expressGraphQL(req => ({
    schema,
    graphiql: true,
    pretty: true
})));
app.set('port', port);

let http = require('http');
let server = http.createServer(app);
server.listen(port);
