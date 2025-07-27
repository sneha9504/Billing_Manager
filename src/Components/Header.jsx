import React from 'react'
import Clock from './Clock'

const Head = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <img
                    src="./logo.svg"
                    alt="Billora Logo"
                    className="w-20 hover:w-24 transition-all duration-300"
                />
                <span className="text-xl font-bold text-black-700">Billora</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
                <Clock />
                <div className="text-gray-600">Welcome, User</div>
            </div>


        </>
    )
}

export default Head