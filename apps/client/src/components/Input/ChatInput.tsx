'use client'
import { useEffect, useRef, useState } from 'react'
import './chat-input.css'

function ChatInput() {
	const textareaRef = useRef(null)
	const inputContainerRef = useRef(null)
	const [isExpanded, setIsExpanded] = useState(false)

	const autoExpand = () => {
		const textarea: any = textareaRef.current
		if (textarea) {
			textarea.style.height = 'auto'
			const newHeight = Math.min(textarea.scrollHeight, 200)
			textarea.style.height = newHeight + 'px'
			if (newHeight > 36) {
				setIsExpanded(true)
			} else {
				setIsExpanded(false)
			}
		}
	}

	const handleInput = (e: any) => {
		autoExpand()
	}

	const handlePaste = () => {
		setTimeout(autoExpand, 10)
	}

	useEffect(() => {
		autoExpand()
	}, [])
	return (
		<div className={`input ${isExpanded ? 'expanded' : ''}`} ref={inputContainerRef}>
			<div className="textarea-container">
				<textarea ref={textareaRef} placeholder="Ask me everything..." rows={1} onInput={handleInput} onPaste={handlePaste} />
			</div>
			<div className="attachment">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.48" />
				</svg>
			</div>
		</div>
	)
}

export default ChatInput
