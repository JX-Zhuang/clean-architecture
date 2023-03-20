import { ITodo } from "../interactor/entity/type";

export interface ITodoView {
    setList(list: ITodo[]): void;
    createTodoSuccess(): void;
}