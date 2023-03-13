import { Merge } from "../../types";
export interface ITodo {
    readonly id: string;
    title: string;
    content?: string | null;
    remindTime?: number | null;
    trash?: boolean;
};
export type CreateTodoParams = Omit<ITodo, 'id'>;
export type UpdateTodoParams = Merge<CreateTodoParams, { title?: string }>;