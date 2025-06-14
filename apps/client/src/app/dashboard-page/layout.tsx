export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="dashboardLayout">
			<div className="dashboardLayout-sidebar">Sidebar</div>
			<div className="dashboardLayout-children">{children}</div>
		</div>
	)
}
