import React from 'react'

const Button = ({className, title, href, float, }) => {

    return (
        <div className="">
            <button className={className} href={href} style={{ borderColor : "white" , float : float }} >{title}</button>
        </div>
    )
}

export default Button





