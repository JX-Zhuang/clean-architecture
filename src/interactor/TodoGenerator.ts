import Todo from './entity/Todo';
import { ITodo, CreateTodoParams, UpdateTodoParams } from './entity/type';
import { IDataGetWay } from './type';
class TodoGenerator {
    constructor(dataGetWay: IDataGetWay) {
        this.dataGetWay = dataGetWay;
    }
    private dataGetWay: IDataGetWay = {
        create: (data) => null,
        remove: (id) => true,
        update: (id, data) => null,
        getList: () => null,
        getDetail: (id) => null,
        getTrashList: () => null
    };
    create(item: CreateTodoParams) {
        const todo = new Todo(item);
        return this.dataGetWay.create(todo.getDetail());
    }
    remove(id: string) {
        return this.dataGetWay.remove(id);
    }
    getList() {
        return this.dataGetWay.getList();
    }
    getDetail(id: string) {
        return this.dataGetWay.getDetail(id);
    }
    update(id: string, data: UpdateTodoParams) {
        const todo = this.getDetail(id);
        if (todo === null) return null;
        const newTodo = new Todo(todo);
        newTodo.update(data);
        return this.dataGetWay.update(id, newTodo.getDetail());
    }
    getTrashList() {
        return this.dataGetWay.getTrashList();
    }
}
export default TodoGenerator;