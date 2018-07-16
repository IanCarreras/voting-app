import axios from 'axios'
import {
  GET_POLLS,
  CHANGE_STATUS,
  CREATE_POLL,
  VOTE,
  ALREADY_VOTED,
  SAVE_POLL,
  DELETE_POLL,
  ADD_ANSWER
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

const createPoll = () => {
  return {
    type: CREATE_POLL
  }
}

const savePoll = (question, answers, user) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/poll`, {
      question,
      answers,
      user
    })
    .then( ({ data }) => {
      dispatch({
        type: SAVE_POLL,
        data
      })
      dispatch({
        type: CREATE_POLL
      })
    })
    .catch((error) => {
      alert('unauthorized access')
      console.log(error)
    })
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
        payload: data.poll
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

const deletePoll = (pollId) => {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/poll/${pollId}`, {
      pollId
    })
    .then( ({ data }) => {
      dispatch({
        type: DELETE_POLL,
        payload: pollId
      })
    })
  }
}

const addAnswer = (answer, pollId) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/poll/${pollId}/answer`, {
      answer,
      pollId
    })
    .then( ({ data }) => {
      dispatch({
        type: ADD_ANSWER,
        payload: data.poll
      })
    })
  }
}

export default {
  getPolls,
  changeStatus,
  createPoll,
  vote,
  alreadyVoted,
  savePoll,
  deletePoll,
  addAnswer
}
