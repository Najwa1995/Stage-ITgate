import React from 'react'
import './soustitre.css'

const Subtitle = ({ subtitle }) => {
    return (
        <div>
            <h3 className='subtitle'>{subtitle}</h3>
        </div>
    )
}

export default Subtitle