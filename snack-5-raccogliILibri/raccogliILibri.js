const getBooks = (ids) => {
    const promises = ids.map((id) => {
        return fetch(`http://localhost:3333/books/${id}`)
            .then((res) => res.json());
    });
    return Promise.all(promises);
};

getBooks([2, 13, 7, 21, 19]).then((books) => console.log(books));