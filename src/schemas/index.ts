import {typeSchema} from './type.schema.js'
import { querySchema } from './query.schema.js';
import { mutationSchema } from './mutation.schema.js';
export const typeDefs = `#graphql
    ${typeSchema}
    ${querySchema}
    ${mutationSchema}
`;