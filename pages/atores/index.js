import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const index = ({atores}) => {
  return (
    <Pagina titulo="Atores mais populares">
        <Row md={3}>
        {atores.map(item=>(
            <Col className='mb-3' key={item.id}>
                <Card>
                    <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500'+ item.profile_path}></Card.Img>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Popularidade: {item.popularity}</Card.Text>
                        <Link href={"/atores/"+item.id} className='btn btn-danger'>Detalhes</Link>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </Pagina>
  )
}

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/person/popular?language=pt-BR')
    const atores = resultado.data.results
  
    return {
      props: {atores}, // will be passed to the page component as props
    }
  }

export default index