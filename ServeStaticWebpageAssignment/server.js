const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const port = 3000;

app.use(express.static(publicPath))

app.get('/data', (req, res) => {
    let foods = [ 
        { id: 1, name: 'Pizza', cuisine: 'Italian', price: 9.99 }, 
        { id: 2, name: 'Sushi', cuisine: 'Japanese', price: 12.99 }, 
        { id: 3, name: 'Tacos', cuisine: 'Mexican', price: 7.99 }, 
        { id: 4, name: 'Pad Thai', cuisine: 'Thai', price: 10.99 }, 
        { id: 5, name: 'Burger', cuisine: 'American', price: 8.99 } 
    ];
    
    res.json(foods);
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});