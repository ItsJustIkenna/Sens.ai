import React from 'react'

const Button = ({backgroundColor, borderRadius, title}) => {

    return (
        <div>
            <button style= {{borderRadius : borderRadius}}>{title}</button>
        </div>
    )
}

export default Button





