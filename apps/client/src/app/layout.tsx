import Navbar from '@/components/Navbar/Navbar'
import { ClerkProviderWrapper } from '@/providers/clerk-provider'
import ReduxProvider from '@/providers/redux-provider'
import { Metadata } from 'next'
import '../app/index.css'
import '../styles/globals.css'
export const metadata: Metadata = {
	title: 'AhsanAI',
	icons: {
		icon: './bot.png',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProviderWrapper>
			<html lang="en">
				<body>
					<div className="rootLayout">
						<ReduxProvider>
							<header>
								<Navbar />
							</header>
							<main>{children}</main>
						</ReduxProvider>
					</div>
				</body>
			</html>
		</ClerkProviderWrapper>
	)
}
