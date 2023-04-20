const { buildSchema } = require("graphql");

let schema = buildSchema(`
    type Product {
        title: String
        price: String
        id: Int
        stock: Int

    }
    type Query {
        getAllProducts: [Product]
    }
    input InputProduct {
        title: String
        price: String
        stock: Int
    }

    type Mutation {
        addProduct(data: InputProduct): Product
        deleteProduct(id: Int ): [Product]
        updateProduct(id: Int, data: InputProduct): [Product]
    }
    
`);

module.exports = { schema };
