import { NoClusteringApp } from './no-clustering-app';
import { ServiceTest } from './service-test';
// const port = 3000;

// const app = express();
// console.log(`Worker Number ${process.pid} started`);

// app.get('/', (req, res) => {
//   res.send('Hi There! This application does not use clustering.....');
// });

// app.get('/api/nocluster', function (req, res) {
//   console.time('noclusterApi');
//   const result = new ServiceTest().execute();
//   console.timeEnd('noclusterApi');

//   console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
//   res.send(`Result number is ${result}`);
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

(() => new NoClusteringApp(new ServiceTest()))();
