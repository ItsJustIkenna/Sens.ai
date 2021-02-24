import React from 'react'

const Logo = ({width, src}) => {
    return (
        <div>
            <img src={src} alt="Logo img" className="is-align-self-center" style={{ width : width}}/>
        </div>
    )
}

export default Logo
