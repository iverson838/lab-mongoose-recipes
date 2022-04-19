const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)

  // .then(() => {
  //   return Recipe.create({
  //     title: 'pizza',
  //     level: 'Easy Peasy',
  //     ingredients: ['tomato', 'flour'],
  //     cuisine: 'italian',
  //     dishType: 'main_course',
  //     duration: 2,
  //     creator: 'Andre'
  //   });
  // })
  // .then(() => {
  //   return Recipe.insertMany(data);
  // })

  // .then(() => {
  //   return Recipe.findOneAndUpdate(
  //     { title: 'Rigatoni alla Genovese' },
  //     { duration: 100 }
  //   );
  // })

  // .then(() => {
  //   return Recipe.deleteOne({ title: 'Rigatoni alla Genovese' });
  //   console.log('SUCCESS');
  // })
  .then((recipe) => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnected from MongoDB');
  })
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
