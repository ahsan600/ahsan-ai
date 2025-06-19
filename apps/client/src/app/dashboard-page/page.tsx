import ChatInput from '@/components/Input/ChatInput'
import Image from 'next/image'
import chat from '../../../public/chat.png'
import code from '../../../public/code.png'
import image from '../../../public/image.png'
import logo from '../../../public/logo.png'
import './dashboardPage.css'

function DashboardPage() {
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
				<ChatInput />
			</div>
		</div>
	)
}

export default DashboardPage
