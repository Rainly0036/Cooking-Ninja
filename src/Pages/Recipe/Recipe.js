import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useTheme } from '../../Hooks/useTheme'
import { projectFirestore } from '../../Firebase/config.js'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  
  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      likes: recipe.likes + 1
    })
  }

  // NO SUCH RECIPE
  useEffect(( ) => {
    setIsPending(true)
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('No such recipe')
      }
    })
  }, [id])

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Like it </button>
          <button>{recipe.likes} Likes</button>
        </>
      )}
    </div>
  )
}