import axios from 'axios'
import {
  GET_POLLS,
  CHANGE_STATUS,
  VOTE,
  ALREADY_VOTED
} from '../constants'

const BASE_URL = 'http://localhost:3030'

const getPolls = () => {
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

const alreadyVoted = () => {
    return {
      type: ALREADY_VOTED
    }
}

const vote = (answer, pollId, userId) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/poll/${pollId}/vote`, {
      userId,
      answer
    })
    .then( ({ data }) => {
      dispatch({
        type: VOTE,
        payload: data.poll,
      })
    })
    .catch((error) => {
      alert('This user has already voted')
      dispatch({
        type: ALREADY_VOTED
      })
    })
  }
}

export default {
  getPolls,
  changeStatus,
  vote,
  alreadyVoted
}
