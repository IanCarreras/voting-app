import axios from 'axios'
import {
  GET_POLLS
} from '../constants'

const BASE_URL = 'http://localhost:3000'

const getPolls = (polls) => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/polls`)
    .then( ({ data }) => {
      dispatch({
        type: GET_POLLS,
        data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export default {
  getPolls
}
