
import './Client.css'
type ClientProps = {
	imagePath:string
	url:string,
	id:string
}
function Client({imagePath, url, id}:ClientProps) {
	return (
		<div className="client-bubble" id={id}>
			<a href={url}>
				<img src={imagePath} />
			</a>
			
		</div>
	)
}

export default Client;