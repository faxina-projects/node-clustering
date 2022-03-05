import cluster from 'cluster';
import express from 'express';
import os from 'os';

import { App } from './app';
import { IServiceTest } from './service-test.interface';

class ClusteringApp extends App {
  constructor(private readonly service: IServiceTest) {
    super(3001);
  }

  public initServer(): void {
    const totalCPUs = os.cpus().length;

    if (cluster.isMaster) {
      console.log(`Number of CPUs is ${totalCPUs}`);
      console.log(`Master ${process.pid} is running`);

      // Fork workers.
      for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, _code, _signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log('Let`s fork another worker!');
        cluster.fork();
      });
    } else {
      this.server = express();
      console.log(`Worker ${process.pid} started`);
      this.initRoutes();
      this.listen();
    }
  }

  public initRoutes(): void {
    this.server.get('/', (req, res) => {
      res.send('Hi There! This application use clustering.....');
    });

    this.server.get('/api/withcluster', (req, res) => {
      console.time('withclusterApi');
      const result = this.service.execute();
      console.timeEnd('withclusterApi');

      console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
      res.send(`Result number is ${result}`);
    });
  }
}

export { ClusteringApp };
