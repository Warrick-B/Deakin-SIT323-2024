const express = require("express");
const app = express();

// Function to add two numbers
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}

// Handle GET request for adding two numbers
app.get("/addTwoNumber", (req, res) => {
    // Parsing n1 and n2 values from the request URL
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // Calling the addTwoNumber function with parsed numbers
    const result = addTwoNumber(n1, n2);
    // Sending JSON response with the result
    res.json({ statuscode: 200, data: result });
});

// Handle GET request for the root URL (http://localhost:3040/)
app.get("/", (req, res) => {
    // HTML content to be sent as response
    const n1 = "<html><body><H1>HELLO THERE THIS IS SENT AS A RESPONSE</H1></body></html>";
    // Setting response Content-Type to text/html
    res.set('Content-Type', 'text/html');
    // Sending the HTML content as response
    res.send(Buffer.from(n1));
})

// Logging the result of adding two numbers 
console.log(addTwoNumber(19, 12));

// Server setup to listen on port 3040
const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
})