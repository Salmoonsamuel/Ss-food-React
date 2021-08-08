import React from 'react';
import { Card, CardTitle, CardBody} from 'reactstrap';


function Package(props){
    return(
      <div className="col-sm-4">
            <Card >
              <CardBody>
                 <CardTitle className="bg-dark text-light text-center shad">{props.package.name}</CardTitle>
                 <br />
                 <h6 class="card-subtitle mb-2 text-muted">Membership Package.</h6>
                      <ul>
                          <li>{props.package.subscriptionYearly}</li>
                          <li>{props.package.subscriptionMonthly}</li>
                         <li>{props.package.description}</li>
                      </ul>
                </CardBody>
          </Card>
      </div>
    )
}

export default Package;