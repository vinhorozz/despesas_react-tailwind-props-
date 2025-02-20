import { ChevronLeftIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export function ItemDetail() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const value = searchParams.get('value');
    const quantity = searchParams.get('quantity');
    const valor = (value * quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    useEffect(() => {
        if (title && description && value && quantity) {
            const item = { title, description, value, quantity };
            localStorage.setItem('item', JSON.stringify(item));
        }
        return () => {
            localStorage.removeItem('item');
        };
    }, [title, description, value, quantity]);

    return (
        <div className='w-screen h-screen flex flex-col items-center bg-blue-300 justify-center'>
            <div className="space-y-4">
                <div className='flex justify-center p-12'>
                    <ChevronLeftIcon className='text-blue-700 text-1x1 absolute top-0 left-0 bottom-0 w-12 h-12'
                        onClick={() => navigate(-1)}
                    />
                    <h1 className="text-3x1 font-bold text-blue-700 text-4xl mb-6">
                        Detalhes do gasto
                    </h1>
                </div>
                <div className='align-super flex flex-col items-start bg-white p-4 rounded-lg shadow-lg'>
                    <p>Title: {title}</p>
                    <p>Description: {description}</p>
                    <p>Value: {parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Total: {valor}</p>
                </div>
            </div>
        </div>
    );
}