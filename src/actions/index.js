import axios from 'axios'
import {
  GET_POLLS,
  CHANGE_STATUS,
  VOTE
} from '../constants'

const BASE_URL = 'http://localhost:3030'

const getPolls = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/poll`)
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

const vote = (answer, pollId, userId) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/poll/${pollId}/vote`, {
      userId,
      answer
    })
    .then( ({ data }) => {
      // listen for errors from server
      // poll does not exist or user has already voted
      dispatch({
        type: VOTE,
        payload: data.poll,
      })
    })
  }
}

export default {
  getPolls,
  changeStatus,
  vote
}
