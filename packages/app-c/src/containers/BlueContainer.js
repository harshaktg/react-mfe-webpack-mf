import React from 'react'

const BlueContainer = ({children}) => {
    return (
        <div style={{height: 500, width: 500, backgroundColor: 'blue'}}>
            {children}
        </div>
    )
}

export default BlueContainer