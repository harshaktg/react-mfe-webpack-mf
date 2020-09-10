import React from 'react'

const RedContainer = ({children}) => {
    return (
        <div style={{height: 500, width: 500, backgroundColor: 'red'}}>
            {children}
        </div>
    )
}

export default RedContainer