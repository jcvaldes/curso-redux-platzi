import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

export interface StarButtonProps {
  isFavorite: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const StarButton: React.FC<StarButtonProps> = ({
  isFavorite,
  onClick
}: StarButtonProps) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  return <Button icon={<Icon />} onClick={onClick}></Button>
}

export default StarButton
