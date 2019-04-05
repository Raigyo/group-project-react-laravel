import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';

export default class CalendarDemo extends Component {

    constructor() {
        super();
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            dates1: null,
            dates2: null,

            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{ backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0 }}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    }

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"]
        };

        return (

            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                    </div>
                </div>
                <div className="p-col-12 mt-3">
                    <p>Date of event:</p>
                    <Calendar value={this.state.date8} onChange={(e) => this.setState({ date8: e.value })} showTime={true} timeOnly={false} hourFormat="24" showIcon="true" dateFormat="yy-mm-dd" showSeconds={true} />

                </div>
                {/*<div className="p-col-12 mt-3">
                    <p>Email reminder :</p>
                    <Calendar value={this.state.date8} onChange={(e) => this.setState({ date1: e.value })} showTime={true} timeOnly={false} hourFormat="24" showIcon="true" dateFormat="yy-mm-dd" showSeconds={true} />
                </div>*/}
            </div>
        );
    }
}
