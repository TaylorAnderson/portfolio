import { Link } from "react-router";
import "./Nav.css"
import { useState } from "react";
function Nav() {
	const navItems = [
		{name: "Home", link: "/portfolio"},
		{name: "Resume", link: "/portfolio/resume"},
		{name: "Work", link: "/portfolio/work"},
	]
	const [currentIndex, setCurrentIndex] = useState(0);

	const onNavItemClicked = (index:number) => () => {
		setCurrentIndex(index);
	}
	return (
		<>
			<div className="nav">
				{navItems.map((item, index) => (
					<Link key={item.name} to={item.link} onClick={onNavItemClicked(index)} className={`nav-item ${index == currentIndex ? "selected" : ""}`}>{item.name}</Link>
				))}
				<button className="nav-item" onClick={
					() => document.location.href='mailto:taylor@taylor-anderson.work'
				}>
					Contact
				</button>
				
			</div>
		</>

	)
}

export default Nav;