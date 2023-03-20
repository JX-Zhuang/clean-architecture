import { ITodo, UpdateTodoParams } from '../interactor/entity/type';
import { IDataGetWay } from '../interactor/type';
// 模拟数据库
class Table<T>{
    private list: T[] = [];
    //增
    insert(data: T) {
        this.list.push(data);
    }
    delete() {

    }
    update() {

    }
    select() {

    }
}
class Database {
    todo = new Table<ITodo>;
}
class MemoryDatabase implements IDataGetWay {
    private list: ITodo[] = [];
    create(data: ITodo) {
        this.list.push(data);
        return data;
    }
    remove(id: string) {
        const index = this.list.findIndex(item => item.id === id);
        if (index < 0) return null;
        this.list.splice(index, 1);
        return true;
    }
    update(id: string, data: ITodo) {
        const index = this.list.findIndex(item => item.id === id);
        if (index < 0) return null;
        this.list[index] = data;
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
export default MemoryDatabase;