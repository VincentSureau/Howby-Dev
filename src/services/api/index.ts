import { CompanyApi } from './company';
import {CounterApi} from './counter';

export class Api implements IService {
  private inited = false;

  counter: CounterApi;
  company: CompanyApi;

  constructor() {
    this.counter = new CounterApi();
    this.company = new CompanyApi();
  }

  init = async (): PVoid => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}
