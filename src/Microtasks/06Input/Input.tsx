import React, {ChangeEvent, useState} from 'react';

type InputType = {
    onButtonClick: (message: string) => void
}

export const Input = ({onButtonClick}: InputType) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const handleButtonClick = () => {
        onButtonClick(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <input onChange={handleInputChange} value={inputValue} />
            <button onClick={handleButtonClick}>+</button>
        </div>
    );
};
