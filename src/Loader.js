import React from 'react';

const Loader = (props) => {
	return(
			<div className="ui active dimmer">
				<div className="ui text loader">{props.message}</div>
			</div>
		);
}

//we could have done this same if this would have been a class based component
Loader.defaultProps = {
	message:"Loading..."
}

export default Loader;