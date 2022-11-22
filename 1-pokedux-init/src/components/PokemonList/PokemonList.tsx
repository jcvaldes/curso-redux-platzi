import React from 'react'
import { PokemonCard } from '../PokemonCard'
import './PokemonList.css'
export interface PokemonListProps {
  pokemons: any[]
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons = []
}: PokemonListProps) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export default PokemonList
