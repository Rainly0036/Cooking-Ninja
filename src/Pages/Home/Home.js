import RecipeList from '../../Components/RecipeList/RecipeList.js'
import './Home.css'
import { projectFirestore } from '../../Firebase/config.js'
import { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        setIsPending(true)
        const unSub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('NO RECIPES FOUND')
                setIsPending(false)
                setData([])
            } else {
                let results = []
                snapshot.docs.forEach(doc => { 
                    results.push({ id: doc.id, ...doc.data() }) 
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unSub()
    }, [])
    
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading</p>}
            {data && <RecipeList recipes={data}/>} 
        </div>
    )
}
