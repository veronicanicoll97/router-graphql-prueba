import { getTypeDefs } from "../common";
import { gql } from 'graphql-tag';
import enums from './enums';
import inputs from './inputs';
import types from './types';

export default gql`
    ${enums}
    ${types}
    ${inputs}
    type Query
    ${getTypeDefs(__dirname, 'query')}
`;