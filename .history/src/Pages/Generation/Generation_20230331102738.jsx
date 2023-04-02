import React from 'react'
import { useParams } from 'react-router-dom'

function Generation() {
    const {id} = useParams()
  return (
    <div>Generation</div>
  )
}

export default Generation