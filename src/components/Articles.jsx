import React from 'react'
import { Link } from 'react-router-dom'

export default function Articles() {
  return (
    <div>
        <h1>Liste des articles</h1>

        <li><Link to='/articles/1'>Article 1</Link></li>
        <li><Link to='/articles/2'>Article 2</Link></li>
        <li><Link to='/articles/3'>Article 3</Link></li>
        <li><Link to='/articles/4'>article 4</Link></li>
        
    </div>
  )
}
