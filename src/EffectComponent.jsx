import React, { useEffect, useState } from 'react'

const EffectComponent = () => {
	const [num, setNum] = useState(1);
	useEffect(()=>{
		console.log("use effect called");
	},[num]);

	const increment = () =>{
		setNum(num+1);
	}

	return (
		<div className='p-7'>
			<button onClick={increment}>increment</button>
			{num}
		</div>
	)
}

export default EffectComponent