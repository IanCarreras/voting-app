import axios from 'axios'
import {
  GET_POLLS,
  CHANGE_STATUS,
  CREATE_POLL
} from '../constants'

const BASE_URL = 'http://localhost:3030'

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

const changeStatus = (nextStatus) => {
  return {
    type: CHANGE_STATUS,
    payload: nextStatus
  }
}

const createPoll = () => {
  return {
    type: CREATE_POLL
  }
}

export default {
  getPolls,
  changeStatus,
  createPoll
}
