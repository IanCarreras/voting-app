import axios from 'axios'
import {
  GET_POLLS,
  CHANGE_STATUS,
  VOTE
} from '../constants'

const BASE_URL = 'http://localhost:3030'

const getPolls = (polls) => {
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

const vote = (answer, ) => {
  return (dispatch, getState) => {
    axios.put(`${BASE_URL}/poll/id/vote`, {
      userId: getState().authReducer.userId,
      answer
    })
    .then( ({ data }) => {
      dispatch({
        type: VOTE,
        data
      })
    })
  }
}

export default {
  getPolls,
  changeStatus,
  vote
}
