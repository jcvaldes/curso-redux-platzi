import { Input } from 'antd'
import React from 'react'

export interface SearcherInterface {}

const Searcher: React.FC<SearcherInterface> = () => {
  return (
    <Input.Search placeholder="Buscar..." style={{ marginBottom: '10px' }} />
  )
}

export default Searcher
