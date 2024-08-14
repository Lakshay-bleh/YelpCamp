const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '66937b98716c5cf35bb804c2',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/drjdbf05v/image/upload/v1721122332/YelpCamp/la8oygjnd3ncbvzgdci2.png',
                    filename: 'YelpCamp/la8oygjnd3ncbvzgdci2'
                },
                {
                    url: 'https://res.cloudinary.com/drjdbf05v/image/upload/v1721065343/YelpCamp/le3gwsmxazme4k5vlvg2.png',
                    filename: 'YelpCamp/le3gwsmxazme4k5vlvg2',
                },
                {
                    url: 'https://res.cloudinary.com/drjdbf05v/image/upload/v1721065343/YelpCamp/l0pqvuwmwjrn6ujl5bdp.png',
                    filename: 'YelpCamp/l0pqvuwmwjrn6ujl5bdp',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
