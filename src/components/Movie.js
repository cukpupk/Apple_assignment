import React from 'react';
import './../App.css';

export default class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: 'none'
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseEnter(e) {
        e.stopPropagation();
        this.setState({
            show: 'block'
        })
    }
    handleMouseLeave(e) {
        e.stopPropagation();
        this.setState({
            show: 'none'
        })
    }
    render() {
        const { show } = this.state;
        const { item } = this.props;
        return (
            <div className={"singleCard " + (this.state.show === 'block' ? 'selected' : '')}
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
            >
                <img src={item.img} alt={item.title} width="100%" height="236px"/>
                <p className="singleCard_title"> {item.title} </p>
                <div className='button_zone'>
                    <button className="button" style={{ display: show }}
                        onClick={() => this.props.onClick(item)}> {this.props.button} </button>
                </div>
            </div>
        )
    }
}