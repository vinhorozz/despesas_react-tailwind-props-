import { Check, ChevronDownIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Item({ item, onClickItem, onClickDeleteItem }) {
    const navigate = useNavigate();

    function onSeeDetailClick(item) {
        const query = new URLSearchParams();
        query.set('title', item.title);
        query.set('description', item.description);
        query.set('value', item.value);
        query.set('quantity', item.quantity);

        navigate(`/detail?${query.toString()}`);
    }

    return (
        <div className="flex justify-center">
            
            <ul className="w-96 space-y-4 bg-slate-300  rounded-2xl             shadow-md p-4 justify-center flex-col"> 
                <h1 className="flex justify-center font-bold text-blue-400 p-1">Lista de itens</h1>
                {Array.isArray(item) && item.map((item) => (
                    <li key={item.id} className="flex gap-1">
                        <button
                            className={`w-full text-white bg-green-700 rounded-md p-2 text-center text-lg hover:bg-green-300 ${item.completed && "line-through"}`}>
                            {item.title}
                        </button>
                        <button
                            className="bg-yellow-500 rounded-md p-2 text-white text-center text-lg hover:bg-blue-300"
                            onClick={() => onSeeDetailClick(item)}>
                            <ChevronDownIcon />
                        </button>
                        <button
                            className="bg-blue-500 rounded-md p-2 text-white text-center text-lg hover:bg-red-300"
                            onClick={() => onClickItem(item.id)}>
                            <Check />
                        </button>
                        <button
                            onClick={() => onClickDeleteItem(item.id)}
                            className="bg-red-500 rounded-md p-2 text-white text-center text-lg hover:bg-blue-300">
                            <Trash2Icon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}