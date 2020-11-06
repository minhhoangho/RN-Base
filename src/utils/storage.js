import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  constructor(storage) {
    this._storage = storage;
  }

  async get(key, defaultValue = null) {
    let value = (await this._storage.getItem(key)) || defaultValue;

    if (value) {
      try {
        value = JSON.parse(value);
      } catch (error) {
        value = defaultValue;
      }
    }

    return value;
  }

  has(key) {
    return this.get(key) !== null;
  }

  async set(key, value) {
    try {
      value = JSON.stringify(value);
      const a = await this._storage.setItem(key, value);
      console.log('%%%%%%%%%', a);
    } catch (e) {
      console.log('ERROR WHEN SETTING FIELD STORAGE: ', e);
    }
  }

  async merge(key, value) {
    try {
      value = JSON.stringify(value);
      if (this.has(key)) {
        await this._storage.mergeItem(key, value);
      }
    } catch (e) {
      console.log('ERROR WHEN MERGING FIELD STORAGE: ', e);
    }
  }

  async remove(key) {
    try {
      await this._storage.removeItem(key);
    } catch (e) {
      console.log('ERROR WHEN REMOVING FIELD STORAGE: ', e);
    }
  }

  async clear() {
    try {
      await this._storage.clear();
    } catch (e) {
      console.log('ERROR WHEN CLEARING STORAGE: ', e);
    }
  }

  async getAllKeys() {
    try {
      const keys = await this._storage.getAllKeys();
      return keys;
    } catch (e) {
      console.log('ERROR WHEN GET ALL KEYS STORAGE: ', e);
      return null;
    }
  }

  async multiGet(keys = []) {
    try {
      const values = await this._storage.multiGet(keys);
      return values;
    } catch (e) {
      console.log('ERROR WHEN MULTIPLE GET FIELDS STORAGE: ', e);
      return null;
    }
  }

  async multiSet(values = []) {
    try {
      await this._storage.multiSet(values);
    } catch (e) {
      console.log('ERROR WHEN MULTIPLE SET FIELDS STORAGE: ', e);
    }
  }

  async multiRemove(keys = []) {
    try {
      await this._storage.multiRemove(keys);
    } catch (e) {
      console.log('ERROR WHEN MULTIPLE REMOVE FIELDS STORAGE: ', e);
    }
  }
}

const LocalStorage = new Storage(AsyncStorage);

export default LocalStorage;
