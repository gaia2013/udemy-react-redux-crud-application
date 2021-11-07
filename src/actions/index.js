// action javascriptのオブジェクトのこと　typeというkey と その値　を持つ　また　値は　unique　である
// action creator actionを解する関数のこと
// action creator を exportした

import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
	console.log(response)
	dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
	const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
	dispatch({ type: CREATE_EVENTS, response })
}
