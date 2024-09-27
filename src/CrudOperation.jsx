import React, { useState } from 'react'

const CrudOperation = () => {

	const [arr, setArr] = useState(["hemang", "raj", "mehul", "priyank"]);
	const [name, setName] = useState("");

	const addIntoArray = () => {
		if (name != "") {
			setArr([...arr, name]);
			setName("");
		}
	}

	const deleteFromArray = (index) => {
		let newArr = [...arr];
		newArr.splice(index, 1);
		setArr(newArr);
	}

	const editIntoArray = (index) => {
		let newName = prompt("Enter the new name:");
		console.log(newName);
		let newArr = [...arr];
		newArr[index] = newName;
		setArr(newArr);
	}

	return (
		<div className='p-5'>
			<input type="text"
				className='border-black border-2 indent-1'
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/><button className='ml-1 bg-blue-500 text-white p-1 rounded-md'
				onClick={addIntoArray}
			>Add</button>
			<ul>
				{
					arr.map((item, index) => {
						return <li key={index}>

							{item}
							<button className='p-1 ml-2 bg-red-600 text-white rounded-md' onClick={() => { deleteFromArray(index) }}>delete</button>
							<button className='p-1 ml-2 bg-yellow-600 text-white rounded-md' onClick={() => { editIntoArray(index) }}>edit</button>
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default CrudOperation