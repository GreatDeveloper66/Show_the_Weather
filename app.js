import express from 'express';
import path from 'path';
import weatherRouter from './routes/weather_router.js';




const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(weatherRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(router);

// // Define routes
// app.get('/', (req, res) => {
//   // Send the index.html file when the root URL is
//   // accessed
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// // import express from 'express';
// // import bodyParser from 'body-parser';
// // const app = express();
// // const __dirname = process.cwd();

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static(__dirname, '/client/build'));

// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/index.html');
// //     });

// // app.listen(PORT, () => {
// //     console.log('Server is running on port ${PORT}');
// //     });

    

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(__dirname, express.static('index.html'));

// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/index.html');
// //     });

// // app.listen(PORT, () => {
// //     console.log('Server is running on port ${PORT}');
// //     });

