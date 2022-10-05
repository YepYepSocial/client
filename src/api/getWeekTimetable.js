import axios from "axios";
import {weekdays} from "../helpers/weekdays";

export const getWeekTimetable = async (gradeId) => {
  return await Promise.all([...weekdays.map(async (_, index) => {
    return (await axios.get(`${process.env.REACT_APP_API_URL}/api/timetable`, {
      params: {
        weekday: index,
        gradeId
      }
    })).data
  })])
}
