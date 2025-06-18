'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import chat from '../../../public/chat.png'
import code from '../../../public/code.png'
import image from '../../../public/image.png'
import logo from '../../../public/logo.png'
import './dashboardPage.css'

function DashboardPage() {
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
		<div className="dashboard-page">
			<div className="upper">
				<div className="logo">
					<Image src={logo} alt=""></Image>
					<h3>Ahsan AI</h3>
				</div>
				<div className="features">
					<div className="feature">
						<Image src={chat} alt=""></Image>
						<span>Create a New Chat</span>
					</div>
					<div className="feature">
						<Image src={image} alt=""></Image>
						<span>Analyze</span>
					</div>
					<div className="feature">
						<Image src={code} alt=""></Image>
						<span>Help me with my code</span>
					</div>
				</div>
			</div>
			<div className="bottom">
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
			</div>
		</div>
	)
}

export default DashboardPage
