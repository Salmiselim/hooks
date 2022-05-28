import React from 'react';
import { Card ,Button} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function movies({movies}) {
 
  
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movies.image} />
            <Card.Body>
                <Card.Text>
                   {movies.name}
                </Card.Text>
                <Link to={`/MoviesLIst/${movies.id}`}>
                <Button variant="primary">see details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default movies