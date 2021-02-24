import React from 'react'

const Logo = ({width, src, position}) => {
    return (
        <div className="is-flex" style={{justifyContent : position}}>
            <a class="" href="/">
            <figure className='image is-256x256'><img src={src} /></figure>
            </a>
            {/* <img src={src} alt="Logo img" className="is-align-self-center" style={{ width : width}}/> */}
        </div>
    )
}

export default Logo
