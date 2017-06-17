# GraphQL-js
Just for fun. Javascript implementation of [GraphQL](http://graphql.org/learn/)

## Download and Install Dependencies
Clone repository and install dependencies with [yarn](https://yarnpkg.com/lang/en/):

```bash
$ yarn install
```

## Usage
Run server:
```bash
$ yarn babel-node server.js
```

To test that your server is running navigate to `localhost:1234/graphql`.

Example of query:
```
{
  alumnos {
    nombre
  }
}
```
