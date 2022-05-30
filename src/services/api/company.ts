import axios, { CancelToken } from 'axios';
import { t } from 'i18n-js';
import {stores} from '../../stores';
 
// const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://api2.howby.fr';

interface RequestOptions {
  cancelToken: CancelToken;
  id?: number;
}

export class CompanyApi {
  get = async ({ cancelToken }: RequestOptions): PVoid => {
    const {company} = stores;

    company.setLoading(true);

    try {
      const resp = await axios({
        method: 'get',
        url: `${baseUrl}/api/pois`,
        cancelToken: cancelToken,
      });

      company.set(resp.data["hydra:member"]);
    } catch (e) {
      console.log(e);
    }

    company.setLoading(false);
  };

  getOne = async ({ cancelToken, id }: RequestOptions): PVoid => {
    const {companySingle} = stores;
    companySingle.setLoading(true);

    try {
      const resp = await axios({
        method: 'get',
        url: `${baseUrl}/api/pois/${id}`,
        cancelToken: cancelToken,
      });

      companySingle.set(resp.data);
    } catch (e) {
      console.log(e);
    }

    companySingle.setLoading(false);
  }
}
