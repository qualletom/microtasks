import React from 'react';
import {topCars} from "./micro02Data";

export const Micro02Map = () => {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {topCars.map((car) => (
                <tr>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
