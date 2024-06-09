import express from 'express';
const app = express();

// Define API routes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'this is a joke'
        }, 
        {
            id: 2,
            title: 'another joke',
            content: 'this is another joke'
        }, 
        {
            id: 3,
            title: 'a third joke',
            content: 'this is a third joke'
        },
        {
            id: 4,
            title: 'a fourth joke',
            content: 'this is a fourth joke'
        },
        {
            id: 5,
            title: 'a fifth joke',
            content: 'this is a fifth joke'
        }
    ];
    res.send(jokes);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
    console.log(`Server running at http://localhost:${port}`);
});
