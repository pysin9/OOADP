const mySQLDB = require('./DBConfig');
const user = require('../models/User');
//const faq = require('../models/FAQ');
const shop = require('../models/Shop');
const Quiz = require('../models/Quiz');
const Cart = require('../models/Cart');
const checkout = require('../models/CheckOut');
const qna = require('../models/QnA');
const rating = require('../models/Rating');
const category = require("../models/Category")
const feedback = require("../models/Feedback")
// If drop is true, all existing tables are dropped and recreated
const setUpDB = (drop) => {
    mySQLDB.authenticate()
        .then(() => {
            console.log('Organic database connected');
        })
        .then(() => {
            /*
            Defines the relationship where a user has many videos.
            In this case the primary key from user will be a foreign key
            in video.
            */
            Cart.hasMany(shop)
            user.hasMany(Cart)
            user.hasMany(shop)
            shop.hasMany(rating)
            user.hasMany(rating);
            category.hasMany(shop)
            user.hasMany(category)

            mySQLDB.sync({ // Creates table if none exists
                force: drop
            }).then(() => {
                console.log('Create tables if none exists')
            }).catch(err => console.log(err))
        })
        .catch(err => console.log('Error: ' + err));
};
module.exports = { setUpDB };