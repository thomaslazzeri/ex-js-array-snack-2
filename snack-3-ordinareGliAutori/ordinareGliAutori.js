const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

const authors = books.map(a => a.author);

const areAuthorsAdults = authors.every(a => a.age >= 18);

authors.sort((a, b) => {
    if (areAuthorsAdults) {
        return a.age - b.age;
    } else {
        return b.age - a.age;
    }
});