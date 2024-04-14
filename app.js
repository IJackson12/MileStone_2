const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const fname = req.body.username; // access form data
    // Add validation logic here
    res.send(``);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

function validateForm() {
    let x = document.forms["myForm"]["fname"]["lname"]["mood"]["thing1"]["thing2"]["thing3"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

window.localStorage.setItem ('itemName', value)
var retrievedValue = window.localStorage['itemName']
