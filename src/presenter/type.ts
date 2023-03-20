import { ITodo } from "../interactor/entity/type";
import todoService, { ICreateTodoParams } from '../service/todoService';
export interface ITodoPresenter {
    getList(): Promise<ITodo[] | null>;
    create(data: ICreateTodoParams): Promise<ITodo | null>;
    // remove(id: string): Promise<boolean | null>;
    // getDetail(id: string): Promise<ITodo | null>;
    // getTrashList(): Promise<ITodo[] | null>;
};