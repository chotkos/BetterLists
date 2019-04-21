import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react'; 


import { DefaultButton } from 'office-ui-fabric-react/lib/Button'; 
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';

export default class BigPanel extends React.Component<IBetterFlightsProps, {}> { 

    public state = {
        showPanel: false
    };

    @override
    public render(): React.ReactElement<{}> {
        
        //this.props.text;
        if(this.props.text && this.props.text.length>0){
            return (      
                <div>
                    <DefaultButton
                        onClick={this._showPanel}
                        text="Open details Panel"
                    />
                    <Panel
                        isOpen={this.state.showPanel}
                        type={PanelType.extraLarge}
                        onDismiss={this._hidePanel}
                        headerText="External details"
                        closeButtonAriaLabel="Close" >
                        <iframe width="100%" height="700px" src={this.props.text} frameBorder="0"></iframe>
                    </Panel>
                </div>
            );
        } else {
            return (      
                <p>No external data</p>
            );
        }
    }

    
  private _showPanel = () => {
    this.setState({ showPanel: true });
  };

  private _hidePanel = () => {
    this.setState({ showPanel: false });
  };
}
