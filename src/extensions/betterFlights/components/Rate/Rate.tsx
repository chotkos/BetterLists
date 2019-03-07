import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react'; 
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';

//import styles from '../BetterFlights.module.scss'; 
import styles from './Rate.module.scss';


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

export default class Rate extends React.Component<IBetterFlightsProps, {}> { 

  @override
  public render(): React.ReactElement<{}> {
   
    let split = this.props.text.split(';');
 
    return (
      <div>
        <span>Flight rating:</span>
        <Rating
          min={1}
          max={5}
          size={RatingSize.Small}
          rating={parseInt(split[0])/2}  
        />
        <span>Staff rating:</span>
        <Rating
          min={1}
          max={5}
          size={RatingSize.Small}
          rating={parseInt(split[1])/2}  
        />
      </div>
    );
  }
}
