import React, { Component } from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends Component {

  //if we take input from other component then props can only read them

	constructor(props) {

		super(props);

		this.state = {
			newItem: "",
			list: [],
		};

	}

	addItem(todoValue) {
		
    if (todoValue !== "") {
			
      const newItem = {
				id: Date.now(),
				value: todoValue,
			};

			const list = [...this.state.list, newItem];
			
			this.setState({
				list,
				newItem: "",
			});

		}
	}

	deleteItem(id) {

		const list = [...this.state.list];

		const updatedlist = list.filter((item) => item.id !== id);

		this.setState({
			list: updatedlist,
		});

	}

	updateInput(input) {

		this.setState({
			newItem: input,
		});
    
	}

	render() {
		return (
			<div>
				<img src={logo} width="100" height="100" className="logo" alt="logo" />
				<h1 className="app-title">LCO ToDo App</h1>
				<div className="container">
        <form>
				
					<input
						type="text"
						className="input-text"
						placeholder="Write a Todo"
						required
						value={this.state.newItem}
						onChange={(e) => this.updateInput(e.target.value)}
					/>
					<button
						className="add-btn"
						onClick={() => this.addItem(this.state.newItem)}
						disabled={!this.state.newItem.length}
					>
						Add Todo
					</button>
          </form>
					<div className="list">
						<ul>
							{this.state.list.map((item) => {
								return (
									<li key={item.id}>
										{item.value}
										<button
											className="btn"
											onClick={() => this.deleteItem(item.id)}
										>
											Delete
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
        
			</div>
		);
	}
}

export default App;
// <input
//   type="checkbox"
//   name="idDone"
//   checked={item.isDone}
//   onChange={() => {}}
// />
