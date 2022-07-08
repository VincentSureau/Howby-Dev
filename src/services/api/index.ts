import { t } from 'i18n-js';
import { CompanyApi } from './company';
import {CounterApi} from './counter';
import { UserApi } from './user';
import { UserPostApi } from './userpost';

export class Api implements IService {
  private inited = false;

  counter: CounterApi;
  company: CompanyApi;
  userpost: UserPostApi;
  user: UserApi;

  constructor() {
    this.counter = new CounterApi();
    this.company = new CompanyApi();
    this.userpost = new UserPostApi();
    this.user = new UserApi();
  }

  init = async (): PVoid => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}
