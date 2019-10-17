import React from 'react';
import {
  Card, Col,CardBody,
  CardTitle, Row,
  CardSubtitle, 
  CardText
} from 'reactstrap';

import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const ActorDetail = ({ actor }) => {
  console.log(actor.known_for);
  if (actor.name === undefined) {
    return <Redirect to='/' />
  }

  var movieList = actor.known_for.map((data,i)=> {
    return (
        <img key={i} className='mr-1' src={'https://image.tmdb.org/t/p/w500' + data.poster_path} style={{height : 250}} alt={'...'}/>
    )
  })
  return (
    <Row className='col-12'>
      <Col className='col-4'>
      <img src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}/>
      </Col>
      <Col className='col-8'>
      <Card className='justify-content-start align-items-start'>
        <CardBody>
          <CardTitle style={{textAlign:'left', fontSize : 35}}>{actor.name }</CardTitle>
           <CardSubtitle style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 17 }}>
              {actor.known_for_department + ' ' + 'Popularity : ' + actor.popularity}
           </CardSubtitle>
            <CardText style={{ textAlign: 'left'}}>Top 3 movies :</CardText>
            {movieList}
        </CardBody>
      </Card>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => ({
  actor: state.actor
});
export default connect(
  mapStateToProps,
  null
)(ActorDetail);