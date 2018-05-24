const faker = require('faker');

//FAKE DATA FOR INITIALIZER
module.exports = [
    {
        id: 0,
        title: faker.lorem.sentences(0.3),
        teaser: faker.lorem.sentences(2),
        articletext: faker.lorem.sentences(40),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/200/300',
    },
    {
        id: 1,
        title: faker.lorem.sentences(0.4),
        teaser: faker.lorem.sentences(2),
        articletext: faker.lorem.sentences(30),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/300/300',
    },
    {
        id: 2,
        title: faker.lorem.sentences(0.2),
        teaser: faker.lorem.sentences(1),
        articletext: faker.lorem.sentences(50),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/200/400',
    },
    {
        id: 3,
        title: faker.lorem.sentences(0.2),
        teaser: faker.lorem.sentences(2),
        articletext: faker.lorem.sentences(30),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/400/300',
    },
    {
        id: 4,
        title: faker.lorem.sentences(0.2),
        teaser: faker.lorem.sentences(7),
        articletext: faker.lorem.sentences(60),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/400/200',
    },
    {
        id: 5,
        title: faker.lorem.sentences(0.7),
        teaser: faker.lorem.sentences(3),
        articletext: faker.lorem.sentences(80),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/200/200',
    },
    {
        id: 6,
        title: faker.lorem.sentences(0.2),
        teaser: faker.lorem.sentences(1),
        articletext: faker.lorem.sentences(10),
        author: faker.name.findName(),
        published: faker.date.recent(),
        image: 'https://picsum.photos/g/250/300',
    },
];