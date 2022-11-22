import { Input } from 'antd'
import React from 'react'

export interface SearcherInterface {}

const Searcher: React.FC<SearcherInterface> = () => {
  return <Input.Search placeholder="Buscar..." />
}

export default Searcher
