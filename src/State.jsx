import React, { useState,useEffect } from 'react'
const State = () => {
	const [num, setNum] = useState(1);

	const increment = () => {
		setNum(num + 10);
	}
	return (
		<div className='p-6'>
			<button className='bg-blue-500 text-white rounded-md p-1' onClick={increment}>increment</button>
			<p>{num}</p>
		</div>
	)
}
export default State