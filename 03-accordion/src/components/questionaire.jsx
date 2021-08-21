import React from 'react'

function questionaire( {id, title, info} ) {
    return (
        <div>
            <ul>
                <h1>{title}</h1>
                <p>{info}</p>
            </ul>
        </div>
    )
}

export default questionaire
