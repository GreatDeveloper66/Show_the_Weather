import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const __dirname = process.cwd();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(__dirname, express.static('index.html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
    });

