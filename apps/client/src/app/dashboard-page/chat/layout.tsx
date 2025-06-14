export default function ChatLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className="chatLayout">{children}</div>
}
