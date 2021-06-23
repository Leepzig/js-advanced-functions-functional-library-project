const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          cb(collection[i], i, collection)
        }
      } else if ( typeof collection === "object") {
        for (property in collection) {
          cb(collection[property], property, collection)
        }
      }
      return collection
    },

    map: function(collection, cb) {
      const newCollection = []
      for (let i = 0; i < collection.length; i++) {
        const newEl = cb(collection)
        newCollection.push(newEl)
      }
      return newCollection
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
