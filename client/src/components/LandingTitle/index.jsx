import React from 'react'

const Title = ({fontSize}) => {
    return (
        <div>
            <h1 className=" has-text-white has-text-centered" style={{ fontSize : fontSize  , fontWeight : "700", letterSpacing: "3px" , padding: "50px 0px 80px 0px"}}>"Turning passions into careers!"</h1>
        </div>
    )
}

export default Title
