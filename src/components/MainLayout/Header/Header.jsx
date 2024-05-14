import React from 'react'
import Container from '../../Container/Container';
import Navbar from '../../Navbar/Navbar';

const Header = () => {
    return (

        <div>
            <Navbar />
            <div className='bg-gradientCustom text-white p-10'>
                <Container>
                    <div className='flex flex-col md:flex-row justify-between items-center'>

                        <div className='flex justify-center items-center'>
                            <img className='w-full' src="/assets/2bottles-fruits.png" alt="" />
                        </div>

                        <div >
                            <h1 className='text-2xl sm:text-5xl font-bold mb-4' >Healthy Weight Loss As Pure As Nature Intended</h1>
                            <p className='text-lg font-bold mb-4'>Support healthy weight loss with FloraSlim's proprietary blend of 8 powerful <span className='text-yellow-400'>tropical nutrients</span> and <span className='text-yellow-400'>plants</span> backed by clinical research</p>

                            <div className='flex w-full mb-4'>
                                <img src="/assets/icons-fda.png" alt="" />
                            </div>

                            <p><span className='font-bold'>Manufactured in the USA</span> from the finest of foreign and domestic ingredients.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header