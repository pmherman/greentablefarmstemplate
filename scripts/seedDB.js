const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the FarmFresh collection and inserts the FarmFresh below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/farmfresh",
  {
  }
);
// Seed for First Collection
const thumbnailSeed = [
  {
    photo: "https://cdn1.medicalnewstoday.com/content/images/articles/270/270191/carrots-contain-vitamin-a.jpg",
    title: "Organic Carrots",
    description: "Yummy Fresh Carrots",
    price: "$0.99",
    date: new Date(Date.now())
  },
  {
  photo: "https://www.adaptiveseeds.com/wp-content/uploads/2014/12/p-7126-lettuce_galisse1.jpg",
  title: "Lettuce",
  description: "Very Green Lettuce",
  price: "$1.99",
  date: new Date(Date.now())
  },
  {
    photo: "https://www.gardenbetty.com/wp-content/uploads/2011/09/2011-09-05-01.jpg",
    title: "Dragon Beans",
    description: "Unique beans to test your pallet",
    price: "$2.99",
    date: new Date(Date.now())
  },
  {
    photo: "https://cdn3.gbot.me/photos/TB/AB/1488890620/-_Raju_s_Hill_Strawberry_F-20000000009678386-500x375.jpg",
    title: "Strawberries",
    description: "Beautiful Strawberries",
    price: "$2.99 per pound",
    date: new Date(Date.now())
  }
];
// Seed for Second Collection
const cafeSeed = [
  {
    photo : "https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-exlarge-169.jpg",
    title : "Organic Coffee",
    description : "A custom made coffee blend",
    price : "$1.49",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/images/cookie.jpg",
    title: "Assorted Cookies",
    description: "homemade cookies",
    price: "$6.99 per pound",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/images/pie.jpg",
    title: "Cherry Pie",
    description: "Home made pie",
    price: "$19.99",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/images/candy.jpg",
    title: "Chocolate Candy",
    description: "assorted candy",
    price: "$6.99 per pound",
    date: new Date(Date.now())
  }
];
// Seed for Third collection
const userSeed = [
  {
    photo: "https://media.istockphoto.com/photos/portrait-of-a-happy-young-man-smiling-on-gray-background-picture-id185815404?k=6&m=185815404&s=612x612&w=0&h=5ETUJgJITLROE4zemjbusUCFR7LHgUosKe-B12dueTU=",
    email: "pmherman85@icloud.com",
    password: "123456",
    date: new Date(Date.now())
  },
  {
    photo: "https://media.licdn.com/dms/image/C4E03AQHlMM_gssjuaw/profile-displayphoto-shrink_800_800/0?e=1530111600&v=beta&t=oPc1yeXvBt0iURxZmh0ArJZ1KBeQ1L-Xl8klxP_9mlU",
    email: "aclemente@gmail.com",
    password: "123456",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/images/tyler.jpg",
    email: "tjhoyt7@gmail.com",
    password: "123456",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/images/kendra.jpg",
    email: "ken2bach@gmail.com",
    password: "123456",
    date: new Date(Date.now())
  }
];
// Instructions to insert the seeds into the first Collection
db.Thumbnail
  .remove({})
  .then(() => db.Thumbnail.collection.insertMany(thumbnailSeed))
  .then(data => {
    console.log("Thumbnail Collection Seeded!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  // Instructions to insert the seeds into the second Collection
  db.Cafe
    .remove({})
    .then(() => db.Cafe.collection.insertMany(cafeSeed))
    .then(data => {
      console.log("Cafe Collection Seeded!");
    })
    .catch(err => {
      console.long(err);
      process.exit(1);
    });
  // Instructions to insert the seeds into the third Collection
    db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log("User Collection Seeded!");
      process.exit(0)
    })
    .catch(err => {
      console.long(err);
      process.exit(1);
    });
