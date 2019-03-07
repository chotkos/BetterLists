import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

//import styles from '../BetterFlights.module.scss'; 
import styles from './Title.module.scss';


export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';
const redStyle = {
  display:'inline-block',
  color:'white',
  backgroundColor:'#e81123',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '50px', 
  alignText: 'center', 
  'text-align': 'center'
};
const darkRedStyle = {
  display:'inline-block',
  color:'white',
  backgroundColor:'#a80000',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '50px', 
  alignText: 'center' , 
  'text-align': 'center'
};
const blackStyle = {
  display:'inline-block',
  color:'white',
  backgroundColor:'black',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '50px', 
  'text-align': 'center'
};



export default class Title extends React.Component<IBetterFlightsProps, {}> {
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
 
    let split = this.props.text.split('/');
    let part1 = split[0];
    let part2 = split[1];
    let part3 = split[2]; 

    return (
      <div className={styles.cell}>
        <span style={redStyle}>{part1}</span>
        <span style={darkRedStyle}>{part2}</span>
        <span style={blackStyle}>{part3}</span>
      </div>
    ); 
  }
}
