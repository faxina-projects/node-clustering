import { IServiceTest } from './service-test.interface';

class ServiceTest implements IServiceTest {
  public execute(): number {
    const base = 8;
    let result = 0;
    for (let i = Math.pow(base, 7); i >= 0; i--) {
      result += i + Math.pow(i, 10);
    }

    return result;
  }
}

export { ServiceTest };
