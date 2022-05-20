import axios, { CancelToken } from 'axios';
import { t } from 'i18n-js';
import {stores} from '../../stores';
 
const baseUrl = 'http://127.0.0.1:8000';

interface RequestOptions {
  cancelToken: CancelToken;
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
}
