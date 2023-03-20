import { ITodo } from "../../../interactor/entity/type";

interface IListProps {
    list: ITodo[];
}
const List: React.FC<IListProps> = ({ list }) => {
    return <ul>
        {list.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
};
export default List;