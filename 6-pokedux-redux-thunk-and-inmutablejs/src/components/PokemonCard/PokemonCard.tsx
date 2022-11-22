import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'
import { StarButton } from '../StarButton'
import { useDispatch } from 'react-redux'
import { setFavoriteAction } from '../../store/actions'

export interface PokemonCardProps {
  name: string
  image: string
  types: string
  id: number
  favorite: boolean
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  image,
  types,
  id,
  favorite
}: PokemonCardProps) => {
  const dispatch = useDispatch()
  const handleOnFavorite = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(setFavoriteAction({ pokemonId: id }))
  }
  return (
    <Card
      title={name}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
      cover={<img src={image} alt={name} />}
    >
      <Meta description={types} />
    </Card>
  )
}

export default PokemonCard
