import axios, { CancelToken } from 'axios';
import { t } from 'i18n-js';
import {stores} from '../../stores';
 
const baseUrl = 'http://127.0.0.1:8000';
// const baseUrl = 'https://api2.howby.fr';

interface RequestOptions {
  cancelToken: CancelToken;
  id?: number;
}

export class UserPostApi {
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
}
