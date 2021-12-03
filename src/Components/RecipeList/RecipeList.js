import { useTheme } from '../../Hooks/useTheme';
import { Link, useNavigate } from 'react-router-dom'
import './RecipeList.css'
import Trashcan from '../../Assets/trashcan.svg'
import { projectFirestore } from '../../Firebase/config.js'

export default function RecipeList({ recipes }) {
    const { mode } = useTheme()
    const navigateTo = useNavigate()

    const handleClick = async (id) => {
        await projectFirestore.collection('recipes').doc(id).delete()
        navigateTo('/')
    }
    if (recipes.length === 0) {
        return <div className="error">No recipes found.</div>
    }
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method.substring(0, 100)}...Read More</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img 
                        className="delete" 
                        src={Trashcan}
                        onClick={() => handleClick(recipe.id)}
                        alt="none" 
                    />
                </div>
            ))}
        </div>
    )
}
