'use strict';
const data = require('../seeder-content/articles.json');
const { faker } = require("@faker-js/faker")

// console.log(faker)

function generateArticles(count = 1000) {
  const articles = [];

  for (let i = 0; i < count; i++) {
    const article = {
      title: faker.company.catchPhrase(),
      imageUrl: faker.image.urlLoremFlickr({ category: 'technics' }),  // Note: This will generate a random image URL, not an actual image
      body: `${faker.hacker.phrase()}\n\n${faker.lorem.words(100)}`,
      author: faker.person.fullName()
    };

    articles.push(article);
  }

  return articles;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', generateArticles(), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
