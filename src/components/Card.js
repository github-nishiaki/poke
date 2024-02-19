import React from 'react';

const statNamesInJapanese = {
    "hp": "馬力",
    "attack": "攻撃力",
    "defense": "守備力",
    "special-attack": "特攻",
    "special-defense": "特防",
    "speed": "スピード",
};
const Card = ({pokemon}) => {
    return (
        <div className="h-96 w-72 p-5 shadow-lg rounded-md flex flex-col items-center my-4 bg-white">
            <p className="text-xl font-bold">{pokemon.name}</p>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} className="w-28 h-28"/>
            <p className="text-md text-center">タイプ：</p>
            {pokemon.types.map((type, index) => <div key={index} className="text-sm">{type.type.name}</div>)}
            <p className="text-md text-center">ステータス：</p>
            {pokemon.stats.map((stat, index) => (
                <div key={index} className="text-sm">{statNamesInJapanese[stat.stat.name]}: {stat.base_stat}</div>
            ))}
        </div>
    );
};


export default Card;