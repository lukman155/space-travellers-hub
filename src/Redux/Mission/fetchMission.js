import axios from 'axios';

const fetchMission = () => axios.get('https://api.spacexdata.com/v3/missions');

export default fetchMission;
