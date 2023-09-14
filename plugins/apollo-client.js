// plugins/apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: 'https://graphqlzero.almansi.me/api',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

console.log('apolloClient :>> ', apolloClient);
export default apolloClient;