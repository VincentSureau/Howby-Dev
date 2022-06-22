import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class RecordStore implements IStore {
  value = null;

  reset = (): void => {
    this.value = null;
  };

  set = (v: string): void => {
    this.value = v;
  };

  loading = false;

  setLoading = (v: boolean): void => {
    this.loading = v;
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: RecordStore.name,
      properties: ['value'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
