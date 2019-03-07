import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import { Persona, PersonaInitialsColor } from 'office-ui-fabric-react/lib/Persona';

//import styles from '../BetterFlights.module.scss'; 
import styles from './Flight.module.scss';


export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';

const hoursStyle={
  fontSize: '30px',
  alignText: 'center', 
  'text-align': 'center'
};

const dateStyle={ 
  'font-weight':'bold',
  fontSize: '12px',
  alignText: 'center', 
  'text-align': 'center'
};

const placeStyle={
  fontSize: '15px',
  alignText: 'center', 
  'text-align': 'center'
};

const tableStyle={
  width:"100%"
}

export default class Flight extends React.Component<IBetterFlightsProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: BetterFlights mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: BetterFlights unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
   
    let split = this.props.text.split(';');
 
    return (
      <table style={tableStyle}>
        <tr>
          <td style={hoursStyle}>{split[2]}</td>           
          <td style={hoursStyle}>{split[5]}</td> 
        </tr>
        <tr>
          <td style={dateStyle}>{split[1]}</td>           
          <td style={dateStyle}>{split[4]}</td> </tr>
        <tr>
          <td style={placeStyle}>{split[0]}</td>           
          <td style={placeStyle}>{split[3]}</td> 
        </tr>
      </table>
    );
  }
}
