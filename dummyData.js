const UserList = [
    {
        id: 1,
        name: "Animesh",
        username: "Animesh239",
        age: 20,
        nationality: "Australia",
        friends: [
            {
                id: 2,
                name: "Pradeepta",
                username: "pr@dy",
                age: 19,
                nationality: "India"
            },
            {
                id: 3,
                name: "Sakya",
                username: "sakya@1234",
                age: 20,
                nationality: "USA"
            },
            {
                id: 4,
                name: "Surajit",
                username: "sura",
                age: 22,
                nationality: "Chile"
            },
            {
                id: 5,
                name: "Surjya",
                username: "surjyaMech",
                age: 20,
                nationality: "China"
            },
        ]
    },
    {
        id: 2,
        name: "Pradeepta",
        username: "pr@dy",
        age: 19,
        nationality: "India",
        friends: [{
            id: 3,
            name: "Sakya",
            username: "sakya@1234",
            age: 20,
            nationality: "USA"
        },
        {
            id: 4,
            name: "Surajit",
            username: "sura",
            age: 22,
            nationality: "Chile"
        },
        {
            id: 5,
            name: "Surjya",
            username: "surjyaMech",
            age: 20,
            nationality: "China"
        },]
    },
    {
        id: 3,
        name: "Sakya",
        username: "sakya@1234",
        age: 20,
        nationality: "USA",
        friends: [{
            id: 4,
            name: "Surajit",
            username: "sura",
            age: 22,
            nationality: "Chile"
        },
        {
            id: 5,
            name: "Surjya",
            username: "surjyaMech",
            age: 20,
            nationality: "China"
        },]
    },
    {
        id: 4,
        name: "Surajit",
        username: "sura",
        age: 22,
        nationality: "Chile"
    },
    {
        id: 5,
        name: "Surjya",
        username: "surjyaMech",
        age: 20,
        nationality: "China"
    },
]

const MovieList = [
    {
        id: 1, 
        name: "Aveners",
        YearOfPublication : 2021,
        InTheaters: true
    },
    {
        id: 2, 
        name: "Guava",
        YearOfPublication : 2076,
        InTheaters: false
    },
    {
        id: 3, 
        name: "SpaceX",
        YearOfPublication : 2017,
        InTheaters: true
    },
    {
        id: 4, 
        name: "NASA",
        YearOfPublication : 2014,
        InTheaters: true
    },
    {
        id: 5, 
        name: "ISRO",
        YearOfPublication : 2023,
        InTheaters: true
    },
]

module.exports = { UserList };
module.exports = { MovieList };