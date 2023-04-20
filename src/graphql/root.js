const productController = require("../controllers/productController");
let root = {
  addProduct: ({ data }) => {
    return productController.save(data);
  },

  deleteProduct: (data) => {
    return productController.deleteById(data.id);
  },

  getAllProducts: () => {
    return productController.getAll();
  },

  updateProduct: (data) => {
    return productController.updateById(data.id, data.data);
  },
};

module.exports = { root };
