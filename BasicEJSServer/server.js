const express = require('express')
const app = express();
const port = 3001;

//configure the view engine and set the v iews directory
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");


//Data for the dynamic
    const pages = [ 
        { route: '/', title: 'Home', content: 'Welcome to the homepage!' }, 
        { route: '/about', title: 'About', content: 'Learn more about us.' }, 
        { route: '/contact', title: 'Contact', content: 'Get in touch with us.' } 
    ];


app.get('/', (req, res) => {
    res.render('Home',{ page: pages[0]} );
})

app.get('/about', (req, res) => {
    res.render('About', {page: pages[1]});
})

app.get('/contact', (req, res) => {
    res.render('Contact', {page: pages[2]})
})

// Start the server
app.listen(port,() => {
    console.log(`listening on port , ${port}`);
});