// Criar uma navbar para a página de produtos com os seguintes redirecionamentos: about FloraSlim, ingredients, reviews, faq e um botão: ORDER NOW

import React from 'react'
import Container from '../Container/Container'

const Navbar = () => {
    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col font-semibold gap-2 menu menu-md dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52">
                            <li className='hover:text-yellow-400'><a href="#about">About FloraSlim</a></li>
                            <li className='hover:text-yellow-400'><a href="#ingredients">Ingredients</a></li>
                            <li className='hover:text-yellow-400'><a href="#reviews">Review</a></li>
                            <li className='hover:text-yellow-400'><a href="#faqs">FAQ</a></li>
                            <li className='hover:text-yellow-400'><a href="#full-label">Full-Label</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl gap-0 font-thin"><span className='text-sky-500 font-bold'>Flora</span>Slim</a>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:text-yellow-400'><a href="#about">About FloraSlim</a></li>
                        <li className='hover:text-yellow-400'><a href="#ingredients">Ingredients</a></li>
                        <li className='hover:text-yellow-400'><a href="#reviews">Review</a></li>
                        <li className='hover:text-yellow-400'><a href="#faqs">FAQ</a></li>
                        <li className='hover:text-yellow-400'><a href="#full-label">Full-Label</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-yellow-400 text-white btn hover:bg-yellow-500" href='#products'>ORDER NOW</a>
                </div>
            </div>
        </Container>
    )
}

export default Navbar