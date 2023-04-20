import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ compania }) => {
  return (
    <Pagina titulo={compania.name}>
      <Row>
        <Col md={3}>
          <Card.Img src={'https://image.tmdb.org/t/p/w500' + compania.logo_path} />
        </Col>
        <Col md={9}>
          <p><strong>Descrição: </strong>{compania.descripyion}</p>
          <p><strong>Localização: </strong>{compania.headquarters}</p>
        </Col>
      </Row>
    </Pagina>
  )
}

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/company/' + id + '?language=pt-BR')
  const compania = resultado.data

  return {
    props: { compania }, // will be passed to the page component as props
  }
}

export default Detalhes