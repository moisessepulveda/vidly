import React, {Component} from "react";

class Counter extends Component {

    render() {

        let classes = this.getClasses();
        const  {value: count} = this.props.counter;
        return (
            <div>
                <div className="row">
                    <div className="col-1">
                        <div className="col-3 d-flex align-items-center">
                            <span className={classes}>{this.formatCount()}</span>
                        </div>

                    </div>
                    <div className="col">
                        <button onClick={() => this.props.onIncrement(this.props.counter)}
                                className="btn btn-secondary btn-sm m-2">+
                        </button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)}
                                disabled={count === 0 ? 'disabled' : ''}
                                className="btn btn-secondary btn-sm m-2">-
                        </button>
                        <button
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm m-2">X
                        </button>

                    </div>
                </div>
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
