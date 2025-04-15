
import { FaCircle, FaArrowDown } from 'react-icons/fa6';
import './Connector.css';
type ConnectorProps = {
	includeArrow?:boolean
}
function Connector({includeArrow}:ConnectorProps) {
	function Arrow() {
		if (includeArrow) return <FaArrowDown size={40} color={"#49515D"}/>
	}
	return (
	  <div className="connector">
		<Arrow />
		{[...Array(3)].map((_, i) => <><br/><FaCircle size={10} color={"#49515D"} key={`connector_${i}`} className="connector-dot"/></>)}
	  </div>
	)
}

export default Connector;