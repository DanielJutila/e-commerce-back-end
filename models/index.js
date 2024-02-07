// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    allowNull: false
  },
  as: 'product_category'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    name: 'categoryId',
    allowNull: false
  },
  as: 'category_product'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,

  //Has to be productTag because of error with product_tag
  as: 'product_tag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_product'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
