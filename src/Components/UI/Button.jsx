import React from 'react'

const Button = ({text}) => {
    console.log(text)
    return (
        <button className='bg-orange-500 text-white px-4 py-2 rounded-md rounded-black'>{text} AMD</button>
    )
}

export default Button