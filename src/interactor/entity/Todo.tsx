import { ITodo, UpdateTodoParams, CreateTodoParams} from './type';
let id = 0;
class Todo implements ITodo {
    id: string = String(id++);
    title: string = '';
    content: string | null = null;
    remindTime: number | null = null;
    trash = false;
    constructor(item: CreateTodoParams) {
        this.title = item.title;
        this.content = item.content || null;
        this.remindTime = item.remindTime || null;
    }
    update(item: UpdateTodoParams) {
        Object.assign(this, item);
    }
    moveInTrash() {
        this.trash = true;
    }
    moveOutTrash() {
        this.trash = false;
    }
    getDetail() {
        return {
            title: this.title,
            content: this.content,
            remindTime: this.remindTime,
            trash: this.trash,
            id: this.id
        }
    }
}
export default Todo;