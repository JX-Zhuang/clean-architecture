import Request from '../request';
import Controller from '../controller';
import { CreateTodoParams } from '../interactor/entity/type';
export interface ICreateTodoParams extends CreateTodoParams { };
//模拟后端请求
class TodoService extends Request {
    async getList() {
        const res = await this.get('/');
        return Controller.todo.getList();
    }
    async createTodo(data: ICreateTodoParams) {
        const res = await this.post('/', data);
        return Controller.todo.create(data);
    }
}
export default new TodoService();