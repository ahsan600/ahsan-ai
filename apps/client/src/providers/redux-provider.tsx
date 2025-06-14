'use client'

import { AppStore, createAppStore } from '@/lib/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore>(null)
	if (!storeRef.current) {
		storeRef.current = createAppStore()
	}
	return <Provider store={storeRef.current}>{children}</Provider>
}
