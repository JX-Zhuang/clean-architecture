const createStorage = (storage: Storage) => {
    return class Storage {
        getItem(key: string) {
            let value = storage.getItem(key);
            if(typeof value === 'string'){
                return JSON.parse(value);
            }
            return value;
        }
        removeItem(key: string) {
            return storage.removeItem(key);
        }
        setItem(key: string, value: string | object) {
            if (typeof value === 'object' && value !== null) {
                return storage.setItem(key, JSON.stringify(value));
            }
            return storage.setItem(key, value);
        }
    }
};
export default createStorage;