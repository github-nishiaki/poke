import {useEffect, useState} from 'react';
import Card from "./components/Card";
import {data} from "autoprefixer";
import Navbar from "./components/Navbar";

export function App() {
    const [next, setNext] = useState("");
    const [page, setPage] = useState(0);
    const [pokemonData, setPokemonData] = useState([]);

    const fetchPokemons = async (page, limit = 20) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * limit}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('エラーが起きました');
        }
        return response.json();
    };

    useEffect(() => {
        const fetchPokemonData = async () => {
            const data = await fetchPokemons(page);
            setNext(data?.next);
            const expandedData = await Promise.all(
                data?.results?.map(async ({url}) => {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('エラーが起きました');
                    }
                    return response.json();
                }),
            );
            setPokemonData(expandedData);
        };
        fetchPokemonData();
    }, [page]);


    const onNextPage = () => {
        if (next === null) return;
        setPage(prevPage => prevPage + 1);
    };
    const onBackPage = () => {
        if (page === 0) return;
        setPage(prevPage => prevPage - 1);
    };


    return (
            <div className="flex-row justify-center items-center mx-4 bg-blue-200 pb-4">
                <Navbar/>
                <div className="flex flex-wrap items-center justify-center">
                    {pokemonData?.map((pokeData) => (
                        <div className="mx-4" key={pokeData.name}>
                            <Card pokemon={pokeData}/>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center my-6">
                    <button onClick={onBackPage}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Back Page
                    </button>
                    <button onClick={onNextPage}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Next
                        Page
                    </button>

                </div>
            </div>
    );
}

export default App;