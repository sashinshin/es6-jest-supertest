import express from 'Express'

const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
});

export default app;
