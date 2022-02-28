import React from 'react';
import './App.css';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import moment from 'moment';

function App(){
var currentDate=new Date();
       function setInput() {
      const input = document.getElementById('input').value;
      const formDate = document.getElementById('formDate').value;
      const interval = document.getElementById('durationIntervals').value;
      var calculateDate =  moment(formDate,"DD/MM/yyyy hh:mm A").add(input, interval).format("DD/MM/yyyy hh:mm A");
      document.getElementById('toDate').value=calculateDate;
        var event = new Event('onChange');
            return document.getElementById('toDate').dispatchEvent(event);
    }

    function calculateDate(){
          if(document.getElementById('toDate')==null)
            currentDate = new Date();
          else{
            currentDate = document.getElementById('toDate').value;
          }
    }
    return(
    <div>
        <table>
            <tbody>
                <tr>
                   <td colspan="2">
                        <DateTimePickerComponent placeholder="Choose From Date-Time" id="formDate" value={new Date()} showTodayButton='true' format='dd/MM/yyyy hh:mm a'></DateTimePickerComponent>
                   </td>
                </tr>
                <tr>
                   <td>
                        <input id="input" type="text" onChange={e => setInput()} />
                   </td>
                   <td>
                        <select name="Duration" id="durationIntervals">
                            <option value="minutes">Minute</option>
                            <option value="hours">Hour</option>
                            <option value="days"  defaultValue>Day</option>
                            <option value="months">Month</option>
                            <option value="year">Year</option>
                        </select>
                   </td>
                </tr>
                <tr>
                   <td colspan="2">
                        <DateTimePickerComponent id ='toDate' value={currentDate} onChange={calculateDate} placeholder="Choose From Date-Time" showTodayButton='true' format='dd/MM/yyyy hh:mm a'></DateTimePickerComponent>
                   </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}
export default App;