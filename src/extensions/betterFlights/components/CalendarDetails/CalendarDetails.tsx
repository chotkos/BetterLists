import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react'; 
import { Calendar, DayOfWeek, DateRangeType } from 'office-ui-fabric-react/lib/Calendar';



export interface IBetterFlightsProps {
  text: string;
}

const LOG_SOURCE: string = 'BetterFlights';

const DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  
    goToToday: 'Go to today',
    weekNumberFormatString: 'Week number {0}'
  };

export default class CalendarDetails extends React.Component<IBetterFlightsProps, {}> { 

    @override
    public render(): React.ReactElement<{}> {
    
        //this.props.text;
        if(this.props.text && this.props.text.length>0)
        {
            let d = new Date(this.props.text);
            return (
            <div>
                <Calendar 
                    key={this.props.text}
                    value={d!}
                    firstDayOfWeek={DayOfWeek.Monday} 
                    strings={DayPickerStrings}
                    isDayPickerVisible={true}
                    minDate={d}
                    maxDate={d}
                    highlightCurrentMonth={true}
                />
            </div>);
            
        }
    }

}
