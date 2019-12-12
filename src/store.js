import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    userHistory: [],
}

function historyReducer(state = initialState, action) {
	console.log(state);
	console.log(action);
	let userHistory = state.userHistory;

	if (userHistory.length > 20) {
		userHistory.shift();
	}

	switch (action.type) {

		case 'FETCH_HISTORY_USER':

			for (let i = 0; i < userHistory.length; i++) {
				if (userHistory[i].id === action.payload.id && userHistory[i].type === 'USER') {
					userHistory.splice(i, 1);
				}
			}

			const newUserHistoryUser = {
				userHistory: [...userHistory, ...[{...action.payload, type: 'USER'}]]
			};

			return newUserHistoryUser;

		case 'FETCH_HISTORY_WORK':

			for (let i = 0; i < userHistory.length; i++) {
				if (userHistory[i].id === action.payload.id && userHistory[i].type === 'WORK') {
					userHistory.splice(i, 1);
				}
			}

			const newUserHistoryWork = {
				userHistory: [...userHistory, ...[{...action.payload, type: 'WORK'}]]
			};

			return newUserHistoryWork;
		default:
			return state;
	}
}

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, historyReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }