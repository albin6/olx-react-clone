import './Signup.css'
import React, { useState } from 'react'
import Logo from '../../assets/Logo'
import { signup } from '../../authentication'
import { addListing } from '../../firestoreServices'
import { Link } from 'react-router-dom'
import BackButton from '../BackButton/BackButton'

function Signup() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const doc = await signup(email, password, userName)
            if (doc?.user?.uid) {
                // If signup is successful, add the listing
                await addListing({
                    uid: doc.user.uid,
                    userName: userName,
                    email: email,
                    phone: phone
                });
                alert('Signup Successful');
            } else {
                // If no user UID, throw an error
                throw new Error('User UID is undefined.');
            }
        } catch (error) {
            setError('Signup failed. Please try again.');
            console.error('signup error', error)
            alert('Signup Failed')
        }
    }

    return (
        <>
            <div className='container'>
                <BackButton />
                <div className="signupParentDiv">
                    <div className='logo-container'>
                        <Logo className='logo' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fname">Username</label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            id="fname"
                            name="name"
                        />
                        <br />
                        <label htmlFor="fname">Email</label>
                        <br />
                        <input
                            className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                        />
                        <br />
                        <label htmlFor="lname">Phone</label>
                        <br />
                        <input
                            className="input"
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            id="number"
                            name="phone"
                        />
                        <br />
                        <label htmlFor="lname">Password</label>
                        <br />
                        <input
                            className="input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            name="password"
                        />
                        <br />
                        <br />
                        <button className='signup-btn'>Signup</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </>
    )
}

export default Signup