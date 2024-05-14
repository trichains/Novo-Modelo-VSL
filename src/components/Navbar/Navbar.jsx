// Criar uma navbar para a página de produtos com os seguintes redirecionamentos: about FloraSlim, ingredients, reviews, faq e um botão: ORDER NOW

import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center text-black'>
            <nav className="flex p-10 gap-32">

                <div className='flex'>
                    <img className='w-28' src="/assets/logo.png" alt="" />
                </div>

                <div className="flex gap-12 font-semibold">
                    <a href="#about">About FloraSlim</a>
                    <a href="#ingredients">Ingredients</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div>
                    <a href="#products" className="bg-gradientCustom text-lg font-bold p-4 rounded-full text-white">ORDER NOW</a>
                </div>
            </nav>
        </div >
    )
}

export default Navbar