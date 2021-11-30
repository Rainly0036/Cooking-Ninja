import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const webPage = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        webPage(`/search?q=${term}`)
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input 
                    type="text" 
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}
