import type { NextConfig } from 'next'
import path from 'path'

const envFile = process.env.NODE_ENV === 'production' ? 'production.env' : 'development.env'
const dotenv = require('dotenv')

dotenv.config({
	path: path.resolve(process.cwd(), 'env', envFile),
})

const nextConfig: NextConfig = {
	env: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
		CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
	},
}

export default nextConfig
