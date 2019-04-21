import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react'; 



export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';

export default class ExternalInfo extends React.Component<IBetterFlightsProps, {}> { 

  @override
  public render(): React.ReactElement<{}> {
   
    //this.props.text;
    if(this.props.text && this.props.text.length>0)


    if(this.props.text.indexOf('button:')==0){
      let url= this.props.text.split('button:')[1];
      return (      
        <a href={url}>
          Check external data
        </a>
      );
    } else {
      return (      
          <iframe 
              src={this.props.text} 
              width="300" 
              height="150"
              frameBorder="0">
          </iframe>
      );
    }

    return (<p>No external data</p>);
  }
}
