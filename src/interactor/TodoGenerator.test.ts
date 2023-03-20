import MemoryDatabase from '../database/MemoryDatabase';
import LocalStorageDatabase from '../database/LocalStorageDatabase';
import Todo from './entity/Todo';
import TodoGenerator from './TodoGenerator';
import { IDataGetWay } from './type';
test('TodoGenerator MemoryDatabase', () => {
    const memoryDatabase = new MemoryDatabase();
    const todoGenerator = new TodoGenerator(memoryDatabase);
    const todo1: any = todoGenerator.create({
        title: 'create title1'
    });
    expect(todo1).toEqual({
        title: 'create title1',
        id: todo1.id,
        remindTime: null,
        content: null,
        trash: false
    });
    const todo2: any = todoGenerator.create({
        title: 'create title2',
        content: 'id:2'
    });
    expect(todo2).toEqual({
        title: 'create title2',
        id: todo2.id,
        remindTime: null,
        content: 'id:2',
        trash: false
    });
    expect(todoGenerator.getList()).toEqual([{
        title: 'create title1',
        id: todo1.id,
        remindTime: null,
        content: null,
        trash: false
    }, {
        title: 'create title2',
        id: todo2.id,
        remindTime: null,
        content: 'id:2',
        trash: false
    }]);
    expect(todoGenerator.remove(todo1?.id)).toBe(true);
    expect(todoGenerator.getList()).toEqual([todo2]);
    expect(todoGenerator.remove(todo1?.id)).toBe(null);
    expect(todoGenerator.getDetail(todo1.id)).toBe(null);
    expect(todoGenerator.getDetail(todo2.id)).toBe(todo2);
    expect(todoGenerator.update(todo1.id, { content: 'update todo1' })).toBe(null);
    const newTodo2 = todoGenerator.update(todo2.id, { content: 'update todo2', title: 'update todo2 title' });
    expect(newTodo2?.title).toBe('update todo2 title');
    expect(newTodo2?.content).toBe('update todo2');
});

test('TodoGenerator LocalStorageDatabase', () => {
    const localStorage = new LocalStorageDatabase();
    const todoGenerator = new TodoGenerator(localStorage);
    const todo1: any = todoGenerator.create({
        title: 'create title1'
    });
    expect(todo1).toEqual({
        title: 'create title1',
        id: todo1.id,
        remindTime: null,
        content: null,
        trash: false
    });
    const todo2: any = todoGenerator.create({
        title: 'create title2',
        content: 'id:2'
    });
    expect(todo2).toEqual({
        title: 'create title2',
        id: todo2.id,
        remindTime: null,
        content: 'id:2',
        trash: false
    });
    expect(todoGenerator.getList()).toEqual([{
        title: 'create title1',
        id: todo1.id,
        remindTime: null,
        content: null,
        trash: false
    }, {
        title: 'create title2',
        id: todo2.id,
        remindTime: null,
        content: 'id:2',
        trash: false
    }]);
    expect(todoGenerator.remove(todo1?.id)).toBe(true);
    expect(todoGenerator.getList()).toEqual([todo2]);
    expect(todoGenerator.remove(todo1?.id)).toBe(null);
    expect(todoGenerator.getDetail(todo1.id)).toBe(null);
    expect(todoGenerator.getDetail(todo2.id)).toBe(todo2);
    expect(todoGenerator.update(todo1.id, { content: 'update todo1' })).toBe(null);
    const newTodo2 = todoGenerator.update(todo2.id, { content: 'update todo2', title: 'update todo2 title' });
    expect(newTodo2?.title).toBe('update todo2 title');
    expect(newTodo2?.content).toBe('update todo2');
});