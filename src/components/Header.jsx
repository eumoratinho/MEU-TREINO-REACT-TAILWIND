

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* tag semantica */}
            <nav className="bg-custom-gray p-4 z-1">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="border-2 border-custom-green text-custom-green p-2">Logo</div>
                    <div className="hidden md:flex space-x-10">
                        <a href="#" className="text-custom-text01">Home</a>
                        <a href="#" className="text-custom-text01">About</a>
                        <a href="#" className="text-custom-text01">Contact</a>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-custom-green text-custom-text01 px-4 py-2 rounded">Login</button>
                    </div>
                    <div className="md:hidden relative">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-custom-text01">
                            {isOpen ? <XMarkIcon className="h-8 w-8"/>: <Bars3Icon className="h-8 w-8"/>}
                        </button>
                    </div>
                    {isOpen && 
                        <div className="md:hidden absolute top-20 right-4 h-auto w-32 flex flex-wrap  bg-custom-gray text-custom-text01">
                            <a href="#" className="w-auto text-3xl">Home</a>
                            <a href="#" className="w-auto text-3xl">About</a>
                            <a href="#" className="w-auto text-3xl">Contact</a>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}

export default Header