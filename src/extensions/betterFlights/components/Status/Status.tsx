import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

//import styles from '../BetterFlights.module.scss'; 
//import styles from './Title.module.scss';
import styles from './Status.module.scss';


export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';


const emptyStyle={
  display:'block',
  color:'white',
  backgroundColor:'#a6a6a6',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '60px', 
  alignText: 'center', 
  'text-align': 'center',
  maxWidth:'60px'
};

const redStyle = {
  display:'block',
  color:'white',
  backgroundColor:'#e81123',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '60px', 
  alignText: 'center', 
  'text-align': 'center',
  maxWidth:'60px'
};
const darkRedStyle = {
  display:'block',
  color:'white',
  backgroundColor:'#a80000',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '60px', 
  alignText: 'center', 
  'text-align': 'center',
  maxWidth:'60px'
};

const blackStyle = {
  display:'block',
  color:'white',
  backgroundColor:'black',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '60px', 
  alignText: 'center', 
  'text-align': 'center',
  maxWidth:'60px'
};



export default class Status extends React.Component<IBetterFlightsProps, {}> {
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
   

    return (
      <div className={styles.cell}>
        <span style={this.props.text == 'DRAFT' ? redStyle:emptyStyle}>DRAFT</span> 
        <span style={this.props.text == 'PAID' ? darkRedStyle:emptyStyle}>PAID</span>
        <span style={this.props.text == 'DONE' ? blackStyle:emptyStyle}>DONE</span>
      </div>
    ); 
  }
}
