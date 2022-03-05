import express from 'express';

import { App } from './app';
import { IServiceTest } from './service-test.interface';

class NoClusteringApp extends App {
  constructor(private readonly service: IServiceTest) {
    super(3000);
  }

  public initServer(): void {
    this.server = express();
    console.log(`Worker Number ${process.pid} started`);
    this.initRoutes();
    this.listen();
  }

  public initRoutes(): void {
    this.server.get('/', (req, res) => {
      res.send('Hi There! This application does not use clustering.....');
    });

    this.server.get('/api/nocluster', (req, res) => {
      console.time('noclusterApi');
      const result = this.service.execute();
      console.timeEnd('noclusterApi');

      console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
      res.send(`Result number is ${result}`);
    });
  }
}

export { NoClusteringApp };
