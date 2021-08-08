import React from 'react';
import { Card, CardTitle, CardBody} from 'reactstrap';


function Guide(props){
    return(
      <div className="col-sm-4">
            <Card className="">
              <CardBody>
                 <CardTitle className="bg-dark text-light text-center shad">{props.guide.name}</CardTitle>
                 <br />
                 <h6 class="card-subtitle mb-2 text-muted">Follow these steps:</h6>
                      <ul>
                          <li>{props.guide.heading}</li>
                         <li>{props.guide.description}</li>
                      </ul>
                </CardBody>
          </Card>
      </div>
    )
}

export default Guide;