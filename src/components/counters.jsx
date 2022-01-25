import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    }

    onDelete = (id) => {
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

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Restablecer</button>
                {this.state.counters.map(counter => (
                    <Counter
                        onDelete={this.onDelete}
                        onIncrement={this.handleIncrement}
                        key={counter.id}
                        counter={counter}

                        />
                ))}
            </div>
        );
    }
}

export default Counters;