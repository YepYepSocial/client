import axios from 'axios';

export const getGrades = async () => {
  return (await axios.get(`${process.env.REACT_APP_API_URL}/api/grades`)).data;
}
