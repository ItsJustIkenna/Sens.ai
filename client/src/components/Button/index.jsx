import React from 'react'

const Button = ({classParams, title, href}) => {

    return (
        <div>
            <button className={classParams} href={href} >{title}</button>
        </div>
    )
}

export default Button





