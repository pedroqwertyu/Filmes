import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Atores = ({atores}) => {
  return (
    <Pagina titulo={atores.name}>
        <Row>
            <Col md={3}>
                <Card.Img src={'https://image.tmdb.org/t/p/w500' + atores.profile_path} />
            </Col>
            <Col md={9}>
                <p>{atores.also_known_as}</p>
                <p>Dia da Morte: {atores.deathday}</p>
                <p>{atores.biography}</p>
            </Col>
        </Row>
    </Pagina>
  )
}

export async function getServerSideProps(context){

    const id = context.params.id

    const resultado=await apiFilmes.get("/person/"+id+'?language=pt-BR')
    const atores = resultado.data
    return{
      props:{atores}
    }
  }

export default Atores