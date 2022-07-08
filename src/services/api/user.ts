import axios, { CancelToken } from 'axios';
import { t } from 'i18n-js';
import { arrayExtensions } from 'mobx/dist/internal';
import {stores} from '../../stores';
 
// const baseUrl = 'http://127.0.0.1:8000';
// const baseUrl = 'http://192.168.1.24:8000';
const baseUrl = 'https://api2.howby.fr';

interface RequestOptions {
  cancelToken: CancelToken;
  id?: number;
}

export class UserApi {
  get = async ({ cancelToken }: RequestOptions): PVoid => {
    const {userpost} = stores;

    userpost.setLoading(true);

    try {
      const resp = await axios({
        method: 'get',
        url: `${baseUrl}/api/user_posts`,
        cancelToken: cancelToken,
      });

      userpost.set(resp.data["hydra:member"]);
    } catch (e) {
      console.log(e);
    }

    userpost.setLoading(false);
  };

  create = async (user: any) => {
      try {
          const response = await axios.post(`https://api2.howby.fr/api/users`, user);
          return response;
      } catch (err) {
          console.log('error : ',err);
          return err;
      }
  };
}
