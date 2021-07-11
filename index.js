
'use strict'
require('dotenv').config()

//if (process.env.NODE_ENV === 'production') {
//  module.exports = require('./unsplash-js.cjs.production.min.js')
//} else {
//  module.exports = require('./unsplash-js.cjs.development.js')
//}
//const unsplash = require('./unsplash-js.cjs.development.js')

const ACCESS_KEY = process.env.ACCESS_KEY
console.log(ACCESS_KEY)
const { createApi } = require('unsplash-js');
const nodeFetch =  require('node-fetch');

var myArgs = process.argv.slice(2);

let unsplash = createApi({ accessKey: ACCESS_KEY,
                           fetch: nodeFetch, });

// non-feed example
unsplash.photos.get({ photoId: myArgs }).then(result => {
  if (result.errors) {
    // handle error here
    console.log('error occurred: ', result.errors[0]);
  } else {
    // handle success here
    const photo = result.response;
 //full data   console.log(photo);
 console.log(photo.urls.regular);
console.log(photo.description);
 console.log(photo.links.html);
console.log(photo.user.name);
  }
});