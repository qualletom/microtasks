import React, {useState} from 'react';
import {Currencies, MoneyType, OnFilterChangeFnType} from "./types";
import {Markup} from "./Markup";

export const Micro05Filter = () => {
    const [money] = useState<MoneyType[]>([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubbles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubbles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubbles', value: 50, number: ' v1234567890'},
    ])
    const [filteredMoney, setFilteredMoney] = useState(money);

    const handleFilterChange: OnFilterChangeFnType = (currency) => {
        let currentFilteredMoney: MoneyType[];

        if (currency === Currencies.All) {
            currentFilteredMoney = money;
        } else {
            currentFilteredMoney = money.filter(item => item.banknotes === currency);
        }

        setFilteredMoney(currentFilteredMoney);
    }

    return (
        <Markup money={filteredMoney} onFilterChange={handleFilterChange}/>
    )
};
