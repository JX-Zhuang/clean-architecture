import TodoGenerator from '../interactor/TodoGenerator';
import initTodo from './Todo';
import { EnumControllerType } from './type';

//单例模式
class Controller {
    static todo: TodoGenerator = {} as TodoGenerator;
    static init(controllerType: EnumControllerType) {
        Controller.todo = initTodo(controllerType);
    }
}
export default Controller;