import { ITodoPresenter } from '../presenter/type';
import todoService, { ICreateTodoParams } from '../service/todoService';
import { ITodoView } from './type';
class TodoPresenter implements ITodoPresenter {
    private service = todoService;
    private view = {} as ITodoView;
    constructor(view: ITodoView) {
        this.view = view;
    }
    async getList() {
        const res = await this.service.getList();
        if (Array.isArray(res)) {
            this.view.setList(res);
        }
        return res;
    }
    create = async (data: ICreateTodoParams) => {
        const res = await this.service.createTodo(data);
        this.view.createTodoSuccess();
        return res;
    }
}
export default TodoPresenter;