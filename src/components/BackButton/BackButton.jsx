import './BackButton.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate()
    function goBack() {
        navigate('/')
    }
    return (<button className='back-btn' onClick={goBack}>Back</button>)
}

export default BackButton