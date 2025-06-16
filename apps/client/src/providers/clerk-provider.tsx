// src/providers/clerk-provider.tsx
'use client'

import { ClerkProvider } from '@clerk/nextjs'
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
	return <ClerkProvider publishableKey={publishableKey}>{children}</ClerkProvider>
}
