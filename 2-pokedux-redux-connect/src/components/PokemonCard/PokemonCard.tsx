import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

export interface PokemonCardProps {
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name
}: PokemonCardProps) => {
  return (
    <Card
      title={name}
      extra={<StarOutlined />}
      cover={
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
      }
    >
      <Meta description="fire, magic" />
    </Card>
  )
}

export default PokemonCard
