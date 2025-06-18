import Menu from '@/components/Menu/Menu'
import './dashboardLayout.css'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="dashboardLayout">
			<div className="sidebar">
				<Menu />
			</div>
			<div className="children">{children}</div>
		</div>
	)
}
