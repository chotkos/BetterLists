import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import { Persona, PersonaInitialsColor } from 'office-ui-fabric-react/lib/Persona';

//import styles from '../BetterFlights.module.scss'; 
import styles from './Passenger.module.scss';


export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';

const iconStyle={
  display:'inline-block',
  color:'white',
  backgroundColor:'black', 
  width: '26px',
  height: '26px',
  lineHeight: '26px',
  margin: '5px 5px 5px 5px', 
  borderRadius:'26px',
  alignText: 'center', 
  'text-align': 'center'
};



export default class Passenger extends React.Component<IBetterFlightsProps, {}> {
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

    let person = {      
      primaryText: split[0] + ' ' + split[1],
      secondaryText: split[2] + ', ' + split[3], 
      imageInitials: (split[0][0]+split[1][0]).toUpperCase(),      
    };
    let color = PersonaInitialsColor.red;

    return (
      <div className={styles.cell}>
        <Persona {...person} initialsColor={color} />           
      </div>
    );
  }
}
