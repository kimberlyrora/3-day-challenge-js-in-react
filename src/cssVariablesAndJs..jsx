import React, { useEffect, useState, useRef } from 'react';
import './cssVariablesAndJs.css'

const CssVariablesAndJs = () => {
	const [color, setColor] = useState('#ffc600');
	const [space, setSpace] = useState();
	const [blur, setBlur] = useState();
	const spaces = useRef();
	const blurs = useRef();
	const colors = useRef();
	// const handleUpdate = (input) => {
	// 	console.log(input.value);
	// }
	useEffect(() => {
	// 	window.addEventListener('load', () => {
	// 		const elements = document.querySelectorAll('input');
	// 		elements.forEach(input => input.addEventListener('change', handleUpdate(input)));
	// 	})
	// const allInputs = inputs.current;
	// console.log(inputs);
})
		
		
// console.log(input)
	// const element = document.querySelectorAll('.controls input');
// const handleUpdate = () => {

// }
const updateSpace = () => {
	const suffix = spaces.current.dataset.sizing;
	document.documentElement.style.setProperty(`--${spaces.current.name}`, spaces.current.value + suffix);
}
const updateBlur = () => {
	const suffix = blurs.current.dataset.sizing;
	document.documentElement.style.setProperty(`--${blurs.current.name}`, blurs.current.value + suffix);
}
const updateColor = (col) => {
	setColor(col);
	document.documentElement.style.setProperty(`--${colors.current.name}`, colors.current.value);
}
	return (
	<div className="container">
		<h2>Update CSS Variables with <span className='h1'>JS</span></h2>
			<div className="controls">
				<label>Spacing:</label>
				<input ref={spaces} id="spacing" type="range" min="10" max="200" name="spacing" value={space} onChange={e => updateSpace(e.target.value)} onMouseMove={el=> updateSpace(el.target.value)} data-sizing="px"/>

					<label>Blur:</label>
					<input ref={blurs} id="blur" type="range" name="blur" max="25" min="0" value={blur} onChange={e => updateBlur(e.target.value)} onMouseMove={el=> updateBlur(el.target.value)}data-sizing="px"/>

						<label>Base Color</label>
						<input  id="base" ref={colors} type="color" name="base" value={color} onChange={e => updateColor(e.target.value)} />
      </div>
    <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="nothing"/>
	</div>
	)
					}
export default CssVariablesAndJs