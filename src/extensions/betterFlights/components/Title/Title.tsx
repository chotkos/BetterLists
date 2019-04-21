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
  display:'block',
  color:'white',
  backgroundColor:'#e81123',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '50px', 
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
  minWidth: '50px', 
  alignText: 'center' , 
  'text-align': 'center',
  maxWidth:'60px'
};
const blackStyle = {
  display:'block',
  color:'white',
  backgroundColor:'black',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '50px', 
  'text-align': 'center',
  maxWidth:'60px'
};

const blueStyle = {
  display:'block',
  color:'white',
  backgroundColor:'blue',
  padding:'5px 5px 5px 5px',
  margin: '1px 1px 1px 1px',
  minWidth: '50px', 
  'text-align': 'center',
  maxWidth:'60px'
};


export default class Title extends React.Component<IBetterFlightsProps, {}> {

  
  part1 = '';
  part2 = '';
  part3 = '';

  constructor(x){
    super(x);

    this.copy1 = this.copy1.bind(this);
    this.copy2 = this.copy2.bind(this);
    this.copy3 = this.copy3.bind(this);
    this.copyAll = this.copyAll.bind(this);
  }

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
    this.part1 = split[0];
    this.part2 = split[1];
    this.part3 = split[2]; 

    return (
      <div className={styles.cell}>
        <span onClick={this.copy1} style={redStyle}>{this.part1}</span>
        <span onClick={this.copy2} style={darkRedStyle}>{this.part2}</span>
        <span onClick={this.copy3} style={blackStyle}>{this.part3}</span>
        <span onClick={this.copyAll} style={blueStyle}>Copy</span>
      </div>
    ); 

  }

  copy1(){
    this.copyStringToClipboard(this.part1);
  }

  copy2(){
    this.copyStringToClipboard(this.part2);
  }

  copy3(){
    this.copyStringToClipboard(this.part3);
  }

  copyAll(){    
    this.copyStringToClipboard(this.props.text);
  }

  copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
  }
  
}
