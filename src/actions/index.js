// action javascriptのオブジェクトのこと　typeというkey と その値　を持つ　また　値は　unique　である
// action creator actionを解する関数のこと
// action creator を exportした

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
	type: INCREMENT
})

export const decrement = () => ({
	type: DECREMENT
})

