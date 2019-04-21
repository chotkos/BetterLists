import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'BetterFlightsFieldCustomizerStrings';
import BetterFlights, { IBetterFlightsProps } from './components/BetterFlights';
import Title from './components/Title/Title';
import Status from '../../../lib/extensions/betterFlights/components/Status/Status';
import Special from './components/Special/Special';
import Passenger from './components/Passenger/Passenger';
import Flight from './components/Flight/Flight';
import Rate from './components/Rate/Rate';
import Stats from './components/Stats/Stats';
import PowerBI from './components/ExternalInfo/ExternalInfo';
import ExternalInfo from './components/ExternalInfo/ExternalInfo';
import CalendarDetails from './components/CalendarDetails/CalendarDetails';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBetterFlightsFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = 'BetterFlightsFieldCustomizer';

export default class BetterFlightsFieldCustomizer
  extends BaseFieldCustomizer<IBetterFlightsFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated BetterFlightsFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "BetterFlightsFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.

    const text: string = `${event.fieldValue}`;

    //debugger;
    switch (event.domElement.parentElement.getAttribute("data-automation-key")){
      case "Title":{        
        const control: React.ReactElement<{}> =
        React.createElement(Title, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Status":{        
        const control: React.ReactElement<{}> =
        React.createElement(Status, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Special_x0020_needs":{        
        const control: React.ReactElement<{}> =
        React.createElement(Special, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }      
      case "Passenger":{        
        const control: React.ReactElement<{}> =
        React.createElement(Passenger, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Departure_x0020_day":{      
        const control: React.ReactElement<{}> =
        React.createElement(CalendarDetails, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Landing_x0020_day":{      
        const control: React.ReactElement<{}> =
        React.createElement(CalendarDetails, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Flight_x0020_details":{        
        const control: React.ReactElement<{}> =
        React.createElement(Flight, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Overall_x0020_Rating":{        
        const control: React.ReactElement<{}> =
        React.createElement(Rate, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "Statistics":{        
        const control: React.ReactElement<{}> =
        React.createElement(Stats, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      case "ExternalInfo":{        
        const control: React.ReactElement<{}> =
        React.createElement(ExternalInfo, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
      default :{
        const control: React.ReactElement<{}> =
        React.createElement(BetterFlights, { text } as IBetterFlightsProps);
        ReactDOM.render(control, event.domElement);
        break;
      }
    }


  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
