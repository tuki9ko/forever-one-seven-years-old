import React, { useState } from "react";
import { render } from "react-dom";
import './styles.css';

const App: React.FC = () => {
	const [age, setAge] = useState(0);
	const [message, setMessage] = useState("");

	const handleAgeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAge(Number(event.target.value));
	}

	const submit = () =>{
		if(age < 15){
			setMessage("15さいみまんにはたいおうしていません。＞＜");
		}else{
			setMessage(`${age - 7} 進数 17歳 です。`);
		}
	}

	return(
		<div>
			<h1>永遠の17(いちなな)歳。</h1>
			<div id="form">
				<input type="number" placeholder="10進数の年齢" onChange={handleAgeValue} />
				<button onClick={submit}>送信</button>
				<div>{ message }</div>
			</div>
		</div>
	);
}

render(<App />, document.getElementById("app"));