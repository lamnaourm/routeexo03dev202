import React from 'react'
import { useParams } from 'react-router-dom'

export default function ArticlesDetails() {

    const { id } = useParams()

    return (
        <div>
          <h1>Details de l'article {id}</h1>  
        </div>
    )
}
