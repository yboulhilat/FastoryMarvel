import React from 'react';
import {
  Card, CardImg,CardBody,
  CardTitle, Row, Col, FormGroup, Input
} from 'reactstrap';
import Logo from '../assets/fastory_logo_grey.svg'
import { connect } from 'react-redux';
import { API } from '../config/api';
class MoviesActor extends React.Component {
  state = {
    actors : [],
    query : '',
    filteredData: []
  }
  UNSAFE_componentWillMount() {
    fetch(API).then((resp) => resp.json())
      .then(actors=> {
        // console.log('Actors ===>', actors)
        const { query } = this.state;
        const filteredData = actors.results.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
          actors : actors.results,
          filteredData : filteredData
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleInputChange = event => {
    const query = event.target.value;
    this.setState(prevState => {
      const filteredData = prevState.actors.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };
  _detailsMovie = (actor) => {
    console.log(actor);
    this.props.dispatchActor(actor);
    this.props.history.push('actor-detail')
  }
  render(){
    const { filteredData, query } = this.state
    console.log(this.state);
    const ActorsList = filteredData.map((actor, i) => {
      return (
        <Col xs={12} lg={2} xl={3} key={i} onClick={() => this._detailsMovie(actor)}>
          <Card className='mb-5'>
            <CardImg width='100%' src={'https://image.tmdb.org/t/p/w500'+actor.profile_path} alt="Hero" style={{ height: 400 }} />
            <CardBody>
              <CardTitle style={{ textAlign : 'left', fontWeight : 'bold'}}>{actor.name}</CardTitle>
            </CardBody>
          </Card>
        </Col>
      )
    })
    
    return(
      <>
      <Row className='col-8'>
        <Col>
          <FormGroup className='mt-5 mb-5'>
              <p className='h3 mb-5'>Hello Fastory :-)</p>
              <Input value={query}
                onChange={this.handleInputChange} 
                placeholder="Look for an actor..." 
                className='inputHero' />
          </FormGroup>
        </Col>
      </Row>
      <Row className='col-8 align-items-center justify-content-center'>
          {query.length <= 0
            ? <img src={Logo} alt={'logo'} className='logo-Grey' />
            : ActorsList
        }
      </Row>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchActor: function (actorDetail) {
      dispatch({ type: 'actor', actor: actorDetail })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MoviesActor);

