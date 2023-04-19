import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Detalhes = ({filme}) => {
  return (
    <Pagina titulo={filme.title}>
        <Row>
            <Col>
                <img src={'https://image.tmdb.org/t/p/w500'+ filme.backdrop_path} style={{width:"500px"}}></img>
            </Col>
            <Col>  
                <p>{filme.overview}</p>
            </Col>
        </Row>
    </Pagina>
  )
}

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data
  
    return {
      props: {filme}, // will be passed to the page component as props
    }
  }

export default Detalhes