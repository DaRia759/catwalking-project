import { Outlet } from 'react-router-dom'
import Navigation from '../Header/Header'

const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	)
}

export default Layout