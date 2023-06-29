import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChanged = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length <= 3) return;
        onNewCategory(newValue)
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>
    )
}
