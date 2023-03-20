import { ITodo, UpdateTodoParams } from '../interactor/entity/type';
import { IDataGetWay } from '../interactor/type';
import createStorage from '../util/createStorage';
const LocalStorage = createStorage(window.localStorage);
const localStorage = new LocalStorage();
const TO_DO_LIST = 'TO_DO_LIST';
class LocalStorageDatabase implements IDataGetWay {
    private list: ITodo[] = [];
    constructor() {
        let list = localStorage.getItem(TO_DO_LIST);
        if (!Array.isArray(list)) {
            list = [];
            localStorage.setItem(TO_DO_LIST, list);
        }
        this.list = list;
    }
    create(data: ITodo) {
        this.list.push(data);
        localStorage.setItem(TO_DO_LIST, this.list);
        return data;
    }
    remove(id: string) {
        const index = this.list.findIndex(item => item.id === id);
        if (index < 0) return null;
        this.list.splice(index, 1);
        localStorage.setItem(TO_DO_LIST, this.list);
        return true;
    }
    update(id: string, data: ITodo) {
        const index = this.list.findIndex(item => item.id === id);
        if (index < 0) return null;
        this.list[index] = data;
        localStorage.setItem(TO_DO_LIST, this.list);
        return data;
    }
    getList() {
        return this.list.filter(item => !item.trash) || null;
    }
    getDetail(id: string) {
        const todo = this.list.find(item => item.id === id);
        return todo || null;
    }
    getTrashList() {
        return this.list.filter(item => item.trash) || null;
    }
}
export default LocalStorageDatabase;