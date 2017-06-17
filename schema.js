import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql/type';

var alumnosDummy = [
  {
    "nombre": "Marco",
    "apellido": "Polo",
    "nif": 12345678
  },
  {
    "nombre": "Cristobal",
    "apellido": "Colon",
    "nif": 87654321
  }
];

var alumnoType = new GraphQLObjectType({
  name: 'Alumno',
  fields: function () {
    return {
      nombre: {
        type: GraphQLString
      },
      apellido: {
        type: GraphQLString
      },
      nif: {
        type: GraphQLInt
      }
    }
  }
});

var rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: function () {
    return {
      alumnos: {
        type: new GraphQLList(alumnoType),
        resolve:
          function () {
            return alumnosDummy;
          }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery
});
