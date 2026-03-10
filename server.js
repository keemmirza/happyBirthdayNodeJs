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

const PORT = process.env.PORT || 10000; // Render's default is often 10000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
