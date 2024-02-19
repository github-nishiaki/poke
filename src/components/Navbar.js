import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-red-400 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://www.pokemon.co.jp/img/logo.png" className="h-32 w-72" alt="Logo"/>
                </a>
                <p className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-12">ポケモン図鑑</p>
            </div>
        </nav>
    );
};

export default Navbar;