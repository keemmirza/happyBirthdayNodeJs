const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the template engine
app.set('view engine', 'ejs');
// Important: Make sure your public files (like images/CSS) are available
app.use(express.static(path.join(__dirname, 'public')));

// THE GENERIC ROUTE (Shows a normal birthday)
app.get('/:name', (req, res) => {
    res.render('birthday_custom', { 
        name: req.params.name, 
        showLove: false 
    });
});

// THE SPECIAL ROUTE (Shows the custom message)
// Example URL: localhost:3000/Hakeem/love
app.get('/:name/love', (req, res) => {
    res.render('birthday_custom', { 
        name: req.params.name, 
        showLove: true 
    });
});

app.listen(3000, () => {
    console.log('🎂 Customized Birthday Server running at http://localhost:3000');
});