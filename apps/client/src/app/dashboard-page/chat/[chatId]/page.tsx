'use client'
import { useParams } from 'next/navigation'

function ChatPage() {
	const { chatId } = useParams()

	return <div>ChatPage {chatId}</div>
}

export default ChatPage
