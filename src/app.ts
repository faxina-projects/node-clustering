import { Application } from 'express';

abstract class App {
  protected server!: Application;

  constructor(protected readonly port: number) {
    this.port = port;
    this.initServer();
  }

  public abstract initServer(): void;

  public abstract initRoutes(): void;

  protected listen = async (): Promise<void> => {
    this.server.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };
}

export { App };
