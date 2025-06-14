import authReducer from '@/features/authSlice'
import { configureStore } from '@reduxjs/toolkit'
export const createAppStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
		},
	})
}
export type AppStore = ReturnType<typeof createAppStore>
