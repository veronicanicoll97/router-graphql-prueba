import { getTypeDefs } from "../../common";
import { gql } from 'graphql-tag';

export default gql`
    ${getTypeDefs(__dirname, 'Tipo')}
`