import React from 'react'

const Button = ({classParams, title}) => {

    return (
        <div>
            <button className={classParams}>{title}</button>
        </div>
    )
}

export default Button





