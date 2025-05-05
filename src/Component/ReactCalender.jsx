// react- date-pecker
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const ReactCalender = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
// };
// export default ReactCalender;

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const ReactCalender = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
export default ReactCalender;