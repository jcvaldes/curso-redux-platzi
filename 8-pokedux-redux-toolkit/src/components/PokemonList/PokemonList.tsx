import React from 'react'
import { PokemonDetails } from '../../store/slices/dataSlice'

import { PokemonCard } from '../PokemonCard'
import './PokemonList.css'
export interface PokemonListProps {
  pokemons: PokemonDetails[]
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons = []
}: PokemonListProps) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export default PokemonList
