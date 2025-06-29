const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(

    {
        name:{
            type: String,
            required: [true,'Please enter product name']
        },

        quantity:{
            type:Number,
            required: true,
            default:0
        },

        price:{
            type: Number,
            required: true,
            default: 0
        },

        image:{
            type:String,
            required: false
        }
    },
    {
        timestamps: true
    }
);




// Create a model named 'Product' based on the ProductSchema
// 'Product' is the name of the model (used by Mongoose to create a collection named 'products')
// ProductSchema is the schema we defined earlier, describing the structure of product documents
// This model can now be used to interact with the 'products' collection in MongoDB
const Product = mongoose.model('Product',ProductSchema);
// Export the Product model so it can be used in other parts of the application
module.exports = Product;