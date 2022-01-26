import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import {Component} from "react";

class App extends Component {

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    constructor() {
        super();
        console.log("app constructor");
    }

    componentDidMount() {
        // ajax calls
        console.log("app mounted");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState);
    }


    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    }

    handleDelete = (id) => {
        this.setState({
            counters: this.state.counters.filter(item => item.id !== id)
        })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters});
    }

    handleDecrement = (counter) => {
        if(counter.value <= 0) return;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters: counters});
    }

    render() {
        console.log("render");
        return (
            <>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </>
        )
    }
}

export default App;
