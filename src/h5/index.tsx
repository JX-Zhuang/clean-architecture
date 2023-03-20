import React, { useEffect, useRef, useState } from 'react';
import Request from '../request';
import axios from '../request/axios';
import fetch from '../request/fetch';

import Controller from '../controller';
import { EnumControllerType } from '../controller/type';
import List from './component/List';
import TodoPresenter from './TodoPresenter';
import { ITodo } from '../interactor/entity/type';
import { ITodoPresenter } from '../presenter/type';
const init = () => {
    //用哪种请求方式是前端控制的，所以注入请求方式
    Request.init(fetch);
    //前端对数据库是无感知的，所以注入数据库方式，后端来判断用哪种数据库
    Controller.init(EnumControllerType.MEMORY);
};
init();
let id = 0;
function App() {
    const [list, setList] = useState<ITodo[]>([]);
    const ref = useRef({} as {
        todoPresenter: ITodoPresenter
    });
    useEffect(() => {
        ref.current.todoPresenter = new TodoPresenter({
            setList,
            createTodoSuccess() {
                ref.current.todoPresenter.getList();
            }
        });
        ref.current.todoPresenter.getList();
    }, []);
    const createTodo = () => {
        ref.current.todoPresenter.create({
            title: `id${id++}`
        });
    }
    return (
        <div className="App">
            <List list={list} />
            <button onClick={createTodo}>create todo</button>
        </div>
    );
}

export default App;
