import React, { useEffect, useState } from 'react';
import { AddItem } from '../components/AddItem';    
import { Item } from '../components/Item';
import { v4 } from 'uuid';

export function Home() {
    // Criando um estado para o item, trazendo do local storage
    const [item, setItem] = useState(JSON.parse(localStorage.getItem('items')) || []);

    function onClickItem(itemId) {
        const newItem = item.map((item) => {
            if (item.id === itemId) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setItem(newItem);
    }

    function onClickDeleteItem(itemId) {   
        const newItem = item.filter((item) => item.id !== itemId);
        setItem(newItem);
    }

    // Adicionando um novo item à lista
    function onAddItemSubmit(title, description, value, quantity) {
        const newItem = {
            id: v4(),
            title: title,
            description: description,
            value: value,
            quantity: quantity,
            completed: false
        };
        setItem([...item, newItem]);
    }

    // Adicionando o item no local storage
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(item));
    }, [item]);

    return (
        <div className='w-screen h-screen flex flex-col items-center bg-blue-300 justify-center'>
            <div className="space-y-4">
            <h1 className="flex justify-center text-3x1 font-bold text-white text-4xl mb-6">Lista de gastos</h1>     
                <AddItem onAddItemSubmit={onAddItemSubmit} />
                <Item item={item} onClickItem={onClickItem} onClickDeleteItem={onClickDeleteItem} />
            </div>
        </div>
    );
}