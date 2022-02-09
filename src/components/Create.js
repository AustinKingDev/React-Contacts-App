import React, { Component, useState } from 'react';
import './Create.css'

const Create = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setContactState] = useState('');
    const [zip, setZip] = useState('');
    let contacts = [];

    const returnContacts = contacts.map((contact) =>
        <li>{contact}</li>
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        contacts = [...contacts, { name, email, phone, address, city, state, zip }];
        console.log(contacts);

    }

    const contactList = (c) => {
        c.map((c) => {
            return <li>{c}</li>
        })
    }

    return (
        <div>

            <div className='container'>
                <h1>Create a Contact</h1>
                <form>
                    <label>Name:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label>Phone:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />
                    <label>Address:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <br />
                    <label>City:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br />
                    <label>State:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={state}
                        onChange={(e) => setContactState(e.target.value)}
                    />
                    <br />
                    <label>Zip:</label>
                    <br />
                    <input
                        type='text'
                        required
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className="submit-button" type='submit' onClick={handleSubmit}>Save</button>
                    <br />

                    <button className="refresh-button" type='submit'>Refresh</button>
                </form>
                <br />
            </div>
            <div>
                <h1>Contact List</h1>
                <ul >
                    {returnContacts}
                </ul>
            </div>
        </div>
    )
}


export default Create;
