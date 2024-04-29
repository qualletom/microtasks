export enum Currencies {
    All = "All",
    Dollars = "Dollars",
    Rubbles = "Rubbles"
}

export type MoneyType = {
    banknotes: keyof typeof Currencies;
    value: number;
    number: string;
}

export type MarkupType = {
    money: MoneyType[];
    onFilterChange: OnFilterChangeFnType
}

export type OnFilterChangeFnType = (currency: Currencies) => void;
