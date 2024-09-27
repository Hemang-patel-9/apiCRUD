import React, { useState } from 'react'

const Crud = () => {

	const [arr, setArr] = useState(["hello", "world", "this", "is", "a", "test"]);
	const [name, setName] = useState("");
	const addIntoArr = () => {
		if (name == "") {
			alert("cant add empty value");
			return;
		}
		setArr([...arr, name]);
		setName("");
	}

	const deleteElement = (index) => {
		const newarr = arr.filter((item) => {
			return arr.indexOf(item) !== index;
		});
		setArr(newarr);
	}
	const editElement = (index) => {
		let newName = prompt("Enter new name");
		let newarr = [...arr];
		newarr[index] = newName;
		setArr(newarr);
	}
	return (
		<div style={{ padding: "40px" }}>
			<input type='text' style={{ border: "2px solid black" }}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button style={{ backgroundColor: "aqua", color: "black" }} onClick={addIntoArr}>Add</button>
			<br />
			<ul>
				{
					arr.map((item, index) => {
						return <li className='mb-3' key={index}>{item}
							<button className='bg-blue-600 text-white rounded-md p-1 ml-2'
								onClick={() => {
									deleteElement(index);
								}}
							>delete</button>
							<button className='bg-yellow-400 text-white rounded p-1 ml-2'
							onClick={()=>{
								editElement(index);
							}}
							>Edit</button>
							</li>
					})
				}
			</ul>
		</div>
	)
}

export default Crud