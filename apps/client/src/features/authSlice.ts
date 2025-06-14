import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
type AuthSlice = {
	clerkId: string | null
	isSigned: boolean | null
}

const initialState: AuthSlice = {
	clerkId: null,
	isSigned: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<AuthSlice>) => {
			state.clerkId = action.payload.clerkId
			state.isSigned = action.payload.isSigned
		},
	},
})

const { setAuth } = authSlice.actions

export default authSlice.reducer
