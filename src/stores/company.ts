import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class CompanyStore implements IStore {
  value = [];

  reset = (): void => {
    this.value = [];
  };
  set = (v: Array<Object>): void => {
    this.value = v;
  };

  loading = false;
  setLoading = (v: boolean): void => {
    this.loading = v;
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: CompanyStore.name,
      properties: ['value'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
