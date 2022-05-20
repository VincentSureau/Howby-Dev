import axios from 'axios';
import { t } from 'i18n-js';
import {stores} from '../../stores';
 
const baseUrl = 'http://127.0.0.1:8000';

export class CompanyApi {
  cancelToken: any = null;

  get = async (): PVoid => {
    const {company} = stores;

    company.setLoading(true);

    try {
      this.cancelToken = axios.CancelToken.source();
      const resp = await axios({
        method: 'get',
        url: `${baseUrl}/api/pois`,
        cancelToken: this.cancelToken.token,
      });

      company.set(resp.data["hydra:member"]);
    } catch (e) {
      console.log(e);
    }

    company.setLoading(false);
  };

  cancel = async (): PVoid => {
    if (this.cancelToken) {
      this.cancelToken.cancel(t('cancel'));
    }
  }
}
