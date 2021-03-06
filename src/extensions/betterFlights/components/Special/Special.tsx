import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

//import styles from '../BetterFlights.module.scss'; 
import styles from './Special.module.scss';


export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';

const iconStyle={
  display:'inline-block',
  color:'white',
  backgroundColor:'#a80000', 
  width: '26px',
  height: '26px',
  lineHeight: '26px',
  margin: '5px 5px 5px 5px', 
  borderRadius:'26px',
  alignText: 'center', 
  'text-align': 'center'
};



export default class Special extends React.Component<IBetterFlightsProps, {}> {
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
    let icons = split.map(need=>{ 
      let initials = need.substring(0,2).toUpperCase();  
      return <div style={iconStyle} title={need}>{initials}</div>
    });

    if(split[0]){ 
      return (
      <div className={styles.cell}> 
        {icons}
      </div>);
    } else return (<div></div>); 
  }
}
