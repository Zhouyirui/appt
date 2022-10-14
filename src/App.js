import { useState } from "react";
import "./App.css";
import ScheduleSelector from "react-schedule-selector";
// import getData from "./spreadsheet";
import axios from "axios";
function App() {
  const [schedule, setSchedule] = useState([]);
  let roster = [];

  const fetchHandler = (e) => {
    axios
      .get("https://sheet.best/api/sheets/c10e7540-e466-43d2-a9b6-02acac9cbc88")
      .then((response) => {
        roster = response;
      });
  };

  fetchHandler();
  const handleChange = (e) => {
    //console.log(schedule);
    console.log(roster);

    setSchedule(e);
  };
  return (
    <div className="App">
      the timing represents the start of each time slot e.g. selecting 8.00am
      represents taking the 8.00-8.30am time slot?
      <ScheduleSelector
        selection={schedule}
        onChange={handleChange}
        numDays={5}
        minTime={8}
        maxTime={22}
        timeFormat={"hh.mm"}
        hourlyChunks={4}
        rowGap={"1px"}
      />
    </div>
  );
}

export default App;
