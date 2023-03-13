import Todo from './Todo';
const createTodo = (params: any) => {
    const todo = new Todo(params);
    const { id, ...detail } = todo.getDetail();
    return detail;
};
test('new Todo,no content,no remindTime', () => {
    const todo = createTodo({
        title: 'Create Todo',
    });
    expect(todo).toEqual({
        title: 'Create Todo',
        content: null,
        remindTime: null,
        trash: false
    });
});
test('new Todo,no remindTime', () => {
    const todo = createTodo({
        title: 'Create Todo',
        content: 'Play Basketball'
    });
    expect(todo).toEqual({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime: null,
        trash: false,
    })
});
test('new Todo', () => {
    const remindTime = Date.now();
    const todo = new Todo({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime
    });
    expect(todo).toEqual({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime,
        id: todo.id,
        trash: false
    })
});
test('new Todo update title', () => {
    const remindTime = Date.now();
    const todo = new Todo({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime
    });
    todo.update({
        title: 'Update Create Todo'
    });
    const { id, ...newTodo } = todo;
    expect(newTodo).toEqual({
        title: 'Update Create Todo',
        content: 'Play Basketball',
        remindTime,
        trash: false
    });
});
test('new Todo update content and null remindTime', () => {
    const todo = new Todo({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime: Date.now()
    });
    todo.update({
        content: 'Update Content',
        remindTime: null
    });
    const { id, ...newTodo } = todo;
    expect(newTodo).toEqual({
        title: 'Create Todo',
        content: 'Update Content',
        remindTime: null,
        trash: false
    });
});
test('new Todo getDetail', () => {
    const todo = new Todo({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime: Date.now()
    });
    expect(todo).toEqual(todo.getDetail());
});
test('new Todo move in trash', () => {
    const todo = new Todo({
        title: 'Create Todo',
        content: 'Play Basketball',
        remindTime: Date.now()
    });
    todo.moveInTrash();
    expect(todo.trash).toEqual(true);
    todo.moveOutTrash();
    expect(todo.trash).toEqual(false);
});