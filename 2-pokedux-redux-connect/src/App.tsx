import { Col } from 'antd'
import { FC, useEffect, useState } from 'react'
import { PokemonList } from './components'
import { Searcher } from './components/Searcher'
import logo from './assets/logo.svg'
import { getPokemons } from './api'
import './App.css'
import { unmountComponentAtNode } from 'react-dom'
import { connect } from 'react-redux'
import { setPokemons as setPokemonsActions } from './redux/actions'
type AppProps = {
  pokemons: any
  setPokemons: any
}

const App: FC<AppProps> = ({ pokemons, setPokemons }: AppProps) => {
  console.log('TCL: pokemons', pokemons)
  // ya no las uso
  // const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    const fetchPokemonst = async () => {
      const pokemonsRes = await getPokemons()
      setPokemons(pokemonsRes)
    }
    fetchPokemonst()
  }, [])

  return (
    <div className="App">
      <img src={logo} alt="Pokedux" />
      <Searcher />

      <PokemonList pokemons={pokemons} />
    </div>
  )
}
// es una funcion que recibe el estado y va a enviar un objeto
// cuyas propiedades van a ser enviadas a las props del componente
const mapStateToProps = (state: any) => ({
  pokemons: state.pokemons
})

// recibe los acions creators y van a ser mapeados al componente
const mapDispatchToProps = (dispatch: any) => ({
  setPokemons: (value: any) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
