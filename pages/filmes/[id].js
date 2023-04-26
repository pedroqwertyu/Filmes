import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ filme, atores }) => {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card.Img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} />
        </Col>
        <Col md={9}>
          <p><strong>Descrição: </strong>{filme.overview}</p>
          <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
          <p><strong>Duração: </strong>{filme.runtime} min</p>
          <p><strong>Nota: </strong>{filme.vote_average}</p>
          <ul>
            {filme.genres.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>

          <Row md={3}>
            {filme.production_companies.map(item => (
              <Col key={item.id}>
                <Card className='mb-3'>
                  <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500' + item.logo_path}></Card.Img>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Link href={'/companias/' + item.id} className='btn btn-danger'>Detalhes</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <h2>Atores</h2>
    <Row>
    {atores.map(item => (
            <Col md={2} className="mb-3">
            <Link href={"/atores/" + item.id}>
            <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500'+item.profile_path}></Card.Img>
            </Link>
            </Col>
        ))}   
    </Row>

    </Pagina>
  )
}

export async function getServerSideProps(context){

    const id = context.params.id

    const resultado=await apiFilmes.get("/movie/"+id+'?language=pt-BR')
    const filme = resultado.data

    const resAtores=await apiFilmes.get("/movie/"+id+'/credits?language=pt-BR')
    const atores = resAtores.data.cast
    return{
      props:{filme, atores}
    }
  }

  export default Detalhes