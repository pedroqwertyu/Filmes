import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'

const index = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    apiFilmes.get('/movie/popular').then(resultado=>{
      setFilmes(resultado.data.results)
    })

  }, [])

  return (
    <Pagina titulo="Página de Filmes">

      {filmes.map(item => (
        <>
        <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} style={{width: "150px"}}/>
        <p>{item.title}</p>
        </>
      ))}

    </Pagina>
  )
}

export default index