import React from 'react'

const Logo = ({width, height, src, position}) => {
    return (
        <div className="is-flex" style={{justifyContent : position}}>
            <a class="" href="/">
            <figure className=''><img src={src} alt="" style={{width : width}}  height="400px" /></figure>
            </a>
            {/* <img src={src} alt="Logo img" className="is-align-self-center" style={{ width : width}}/> */}
        </div>
    )
}

export default Logo
