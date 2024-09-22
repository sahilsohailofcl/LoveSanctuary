// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 3000;

// Allow CORS (since your frontend is hosted on GitHub Pages)
app.use(cors());

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up CSV writer
const csvWriter = createCsvWriter({
    path: 'emails.csv',
    header: [
        { id: 'email', title: 'Email' },
    ]
});

// Handle form submission
app.post('/submit-email', (req, res) => {
    const email = req.body.email;

    // Save to CSV
    csvWriter.writeRecords([{ email }])
        .then(() => {
            console.log('Email saved to CSV:', email);
            res.send('Email saved successfully');
        })
        .catch(error => {
            console.error('Error saving email to CSV:', error);
            res.status(500).send('Error saving email');
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
