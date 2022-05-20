import {stores} from '../../stores';

export class CounterApi {
  get = async (): PVoid => {
    const {counter} = stores;

    counter.setLoading(true);

    try {
      counter.set(10);
    } catch (e) {
      console.log(e);
    }

    counter.setLoading(false);
  };
}
