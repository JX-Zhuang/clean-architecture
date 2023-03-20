import createTodo from '../interactor/createTodo';
import { EnumControllerType } from './type';

const initTodo = (type: EnumControllerType) => {
    switch (type) {
        case EnumControllerType.LOCAL_STORAGE:
            return createTodo.createLocalStorage();
        default:
            return createTodo.createMemory();
    }
}
export default initTodo;