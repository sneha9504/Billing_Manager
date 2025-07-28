import React from 'react'
import Clock from './Clock'
import {authState} from '../Pages/authForm'


const Head = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <img
                    src="./logo.svg"
                    alt="Billora Logo"
                    className="w-30 hover:w-24 transition-all duration-300"
                />
            </div>
            <div className="flex items-center gap-4 ml-auto">
                <Clock />
                <div className="text-gray-600">Welcome, {authState.currentUser.email}</div>
            </div>


        </>
    )
}

export default Head