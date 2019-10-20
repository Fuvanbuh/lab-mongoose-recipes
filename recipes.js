const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');
const Recipies = require('./models/Recipies');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/*Recipies.create({ title: 'Tartar', level: 'UltraPro Chef', cuisine: 'Mediterranean' })
  .then(recipe => { console.log(`The ${recipe.title} recipe was created`) })
  .catch(err => {
    console.log(`An Error ocurred ${err}. `)
  });*/

/*Recipies.insertMany(data)
  .then(recipes => { console.log(`this is ${recipes}`) })
  .catch(err => {
    console.log(`An Error ocurred ${err}.`)
  });*/

/*Recipies.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }, { new: true }, (err, doc) => {
  if (err) {
    console.log('Something went wrong.')
  } else {
    console.log(doc)
  }
})*/

Recipies.remove({ title: "tartar" }, (err, doc) => {
  if (err) {
    console.log('Something went wrong.')
  } else {
    console.log(`${doc} was removed.`)
  }
})

mongoose.connection.close()