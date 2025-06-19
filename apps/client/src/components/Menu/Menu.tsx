'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import cross from '../../../public/cross.png'
import drawerImage from '../../../public/drawer.png'
import './menu.css'

function Menu() {
	const [showDrawer, setShowDrawer] = useState(false)

	const handleToggleDrawer = () => {
		setShowDrawer((prev) => !prev)
	}

	return (
		<div className="menu">
			<div className="drawer">
				<Image onClick={handleToggleDrawer} src={drawerImage} alt="Menu toggle" role="button" />
			</div>

			{showDrawer && <div className="overlay" onClick={handleToggleDrawer} />}

			<div className={`chat-list ${showDrawer ? 'show-drawer' : ''}`}>
				<div className="content">
					<div className="dashboard">
						<span>Dashboard</span>
						{showDrawer && (
							<div>
								<Image onClick={handleToggleDrawer} src={cross} alt="Menu toggle" role="button" />
							</div>
						)}
					</div>
					<div className="link">
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
					</div>
				</div>
				<div className="chats">
					<span>Recent Chats</span>
					<div className="list">
						<Link href="/dashboard-page/chat/123">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
						<Link href="/">Create a new Chat</Link>
						<Link href="/">Explore Ahsan AI</Link>
						<Link href="/">Contact</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
