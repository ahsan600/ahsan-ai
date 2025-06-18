import Link from 'next/link'
import './menu.css'
function Menu() {
	return (
		<div className="menu">
			<div className="content">
				<span>Dashboard</span>
				<div className="link">
					<Link href="/">Create a new Chat</Link>
					<Link href="/">Explore Ahsan AI</Link>
					<Link href="/">Contact</Link>
				</div>
			</div>
			<div className="chats">
				<span>Recent Chats</span>
				<div className="list">
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
					<Link href="/">Create a new Chat</Link>
					<Link href="/">Explore Ahsan AI</Link>
					<Link href="/">Contact</Link>
				</div>
			</div>
		</div>
	)
}

export default Menu
