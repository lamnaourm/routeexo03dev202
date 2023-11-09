import React from 'react'
import { Link } from 'react-router-dom'

export default function Categorie() {
  return (
    <div>
        <h1>Page des categogies</h1>
        <h3>Liste des sous categories : </h3>
        <ul>
            <li><Link to='/categories/cuisines'>Cuisines</Link></li>
            <li><Link to='/categories/voyages'>Voyages</Link></li>
            <li><Link to='/categories/technologies'>Technologies</Link></li>
        </ul>
    </div>
  )
}
