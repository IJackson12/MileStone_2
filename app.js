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

// Adding a form here to check the validation and introduction
function validateForm() {
    let x = document.forms["myForm"]["fname"]["lname"]["mood"]["thing1"]["thing2"]["thing3"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  {
    const response = await fetch("https://ijackson12.github.io/MileStone_2/?fname=&lname=&mood=&thing2=Tacos&thing3=Other", {
      method: "POST",
      // Setting the Data and Requesting the Data
      body: formData,
    });
    console.log(await response.json());
  } try {e}
    catch{error(e);
    }

// Take over the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
window.localStorage.setItem ('itemName', value)
var retrievedValue = window.localStorage['itemName']
