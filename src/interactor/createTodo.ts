import LocalStorageDatabase from '../database/LocalStorageDatabase';
import MemoryDatabase from '../database/MemoryDatabase';
import TodoGenerator from './TodoGenerator';
import { ICreateInteractor } from './type';
const createTodo: ICreateInteractor<TodoGenerator> = {
    createLocalStorage() {
        const localStorage = new LocalStorageDatabase();
        return new TodoGenerator(localStorage);
    },
    createMemory() {
        const memory = new MemoryDatabase();
        return new TodoGenerator(memory);
    }
};
export default createTodo;