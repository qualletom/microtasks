import React from 'react';
import {Currencies, MarkupType} from "./types";

export const Markup = ({money, onFilterChange}: MarkupType) => {
    return (
        <>
            <ul>
                {money.map((item) => {
                    return (
                        <li key={item.number}>
                            {item.banknotes} - {item.value} - {item.number}
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onFilterChange(Currencies.All)}>All</button>
                <button onClick={() => onFilterChange(Currencies.Dollars)}>Dollars</button>
                <button onClick={() => onFilterChange(Currencies.Rubbles)}>Rubbles</button>
            </div>
        </>
    );
};
