import React from 'react'

const Button = ({className, title, href}) => {

    return (
        <div>
            <button className={className} href={href} style={{ borderColor : "white"}} >{title}</button>
        </div>
    )
}

export default Button





