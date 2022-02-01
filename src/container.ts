import { asFunction, asValue, createContainer } from 'awilix';
import { apollo } from '@/_sharedKernel/interface/http/graphQl/apollo';
import { server } from '@/_sharedKernel/interface/http/server';
import { rootRouter } from '@/_sharedKernel/interface/http/routers'
import { userMutationResolver, userQueryResolver } from './user/interface/http/graphQL/resolvers';
import { resolvers } from './_sharedKernel/interface/http/graphQl/resolvers';
import { typeDefs } from './_sharedKernel/interface/http/graphQl/typeDefs';
import { userTypeDefs } from './user/interface/http/graphQL/userTypeDefs';
import { config } from './config';

const container = createContainer()
// Interfaces layer registrations
.register({
    server: asFunction(server).singleton(),
    apollo: asFunction(apollo).singleton(),
    rootRouter: asFunction(rootRouter).singleton(),
    resolvers: asFunction(resolvers),
    config: asValue(config),
    typeDefs: asFunction(typeDefs),
})
// User Module registrations
.register({
    userMutationResolver: asFunction(userMutationResolver),
    userQueryResolver: asFunction(userQueryResolver),
    userTypeDefs: asFunction(userTypeDefs),
});

type Container = typeof container;

export { container };
export type { Container };
