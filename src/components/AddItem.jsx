
import React, {useState} from "react";
import { Input } from "./Input";

export function AddItem({onAddItemSubmit}) {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[value, setValue] = useState(0);
    const[quantity, setQuantity] = useState(0);

    function handleAddItem(){
        if  (!title.trim()|| !description.trim()){
            return alert("É necessário adicionar valores")
        }
        const numericValue = parseFloat(value.replace(",", "."));
        const numericQuantity = parseInt(quantity, 10);

        if (isNaN(numericValue) || isNaN(numericQuantity) || numericValue < 0 || numericQuantity <= 0) {
                return alert("Por favor, insira valores numéricos válidos para valor e quantidade.");
        }

        onAddItemSubmit(title, description, numericValue, numericQuantity);
        setTitle('');
        setDescription('');
        setValue(0);
        setQuantity(0);  
}

    return(
        <>
        <div>
        <ul 
          className="w-96 space-y-4 bg-slate-300 
          rounded-md shadow-md p-4 justify-center flex-col"> 
                <h1 className="font-bold flex justify-center">
                Adicionar item</h1>
        <Input placeholder="Digite o título do item"
                value={title}
                onChange={()=>setTitle(event.target.value)}/>
                
        <Input placeholder="Digite a descrição do item"
                value={description}
                onChange={()=>setDescription(event.target.value)}/>

       <Input placeholder="Digite o valor do item"
                value={value}
                onChange={()=>setValue(event.target.value)}/>

        <Input placeholder="Digite a quantidade de itens"
                value={quantity}
                onChange={()=>setQuantity(event.target.value)}/>

        <button
                onClick={handleAddItem}
                className="w-full bg-blue-400 p-2 rounded-md text-white font-bold"
                >
                    Adicionar
                </button>
        </ul>
        </div>
        </>
    )
}