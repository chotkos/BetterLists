import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

//import styles from '../BetterFlights.module.scss';  


export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';


const statsContainer:React.CSSProperties= {
  height: "100px"  
};


export default class Stats extends React.Component<IBetterFlightsProps, {}> {
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
    
    let columns = this.props.text.split(';').map(x=>{  
      let s:React.CSSProperties = {
        display: "inline-block",
        height: x+"px",
        marginTop: (100-parseInt(x))+"px",
        width: "10px",
        backgroundColor: "red", 
        marginRight: "5px"};
      return <div style={s}></div>;
    });

    return (
      <div style={statsContainer}>
        {columns}
      </div>
    ); 
  }
}
