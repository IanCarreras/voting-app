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

const vote = (answer, pollId, polls) => {
  return (dispatch, getState) => {
    axios.put(`${BASE_URL}/poll/:id/vote`, {
      pollId,
      userId: getState().auth.userId,
      answer
    })
    .then( ({ data }) => {
      dispatch({
        type: VOTE,
        polls: polls.push(data.poll)
      })
    })
  }
}

export default {
  getPolls,
  changeStatus,
  vote
}
