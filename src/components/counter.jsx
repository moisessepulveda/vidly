import React, {Component} from "react";

class Counter extends Component {

    render() {

        let classes = this.getClasses();

        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-info btn-sm">increment</button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">eliminar</button>
            </div>
        );
    }

    getClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;