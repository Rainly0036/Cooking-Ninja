import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import './NavBar.css'
import { useTheme } from '../../Hooks/useTheme'

export default function NavBar() {
    const { color } = useTheme()
    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </Link>
                <Searchbar />
                <Link to="/create">
                    <h1>Create Recipe</h1>
                </Link>
            </nav>
        </div>
    )
}