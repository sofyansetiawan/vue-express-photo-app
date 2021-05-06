'use strict';
const axios = require("axios");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     const photos = []

     try{
        const data = await axios("https://jsonplaceholder.typicode.com/photos")
        data.data.forEach(item => {
          delete item.id
          item.createdAt = new Date()
          item.updatedAt = new Date()
          photos.push(item)
        })
        return queryInterface.bulkInsert('Photos', photos, {});
     }
     catch(err){
        console.log(err)
     }    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Photos', null, {});
  }
};
