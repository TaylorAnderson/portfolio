import "./Resume.css"
import ResumePDF from "../assets/Taylor Anderson Resume 2025.pdf"
function Resume() {
	return (
		<>
			<h1>resume</h1>
			<hr />
			<div id="resume">
				<object data={ResumePDF} type="application/pdf" id="resume-pdf" width={"100%"} height={"100%"}>
				</object>
			</div>
		</>

	)
}

export default Resume