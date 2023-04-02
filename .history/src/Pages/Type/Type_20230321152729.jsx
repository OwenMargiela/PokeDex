import React from 'react'
import { useParams } from 'react-router-dom';
import './Type.css'
function Type() {
    const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default Type