import React from 'react'
import { IPokemonDetails } from '../../store/actions/types'
import { PokemonCard } from '../PokemonCard'
import './PokemonList.css'
export interface PokemonListProps {
  pokemons: IPokemonDetails[]
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
