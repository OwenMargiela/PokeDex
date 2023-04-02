import React from 'react'
import { useParams } from 'react-router-dom'

function Generation() {
    const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default Generation