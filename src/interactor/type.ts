import { ITodo, UpdateTodoParams } from "./entity/type";

export interface IDataGetWay {
    create: (data: ITodo) => ITodo | null;
    remove: (id: string) => boolean | null;
    update: (id: string, data: ITodo) => ITodo | null;
    getList: () => ITodo[] | null;
    getDetail: (id: string) => ITodo | null;
    getTrashList: () => ITodo[] | null;
};