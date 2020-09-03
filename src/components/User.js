import React from 'react'

const User=(props)=>{
    return(
            <div key={props.user.id}>
                <h1>{props.user.name}</h1>
                <h3>{props.user.email}</h3>
                <p>{props.user.phone}</p>
            </div>
    )
}

export default User;