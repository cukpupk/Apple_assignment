import React from 'react';
import  { addMovie, removeMovie, getData } from './../actions/index';
import { connect } from 'react-redux';
import Movie from './Movie';

class Netfix extends React.Component {
    componentDidMount() {
        this.props.getData()
    }
    render() {
        const list = this.props.MovieList[this.props.listType];
        const name = this.props.btnName;
        const listName = this.props.list;
        const handleClickName = name === 'Remove' ? this.props.removeMovie : this.props.addMovie;
        return (
            <div >
                <h2 className="title">{listName}</h2>
                <ul className="card-content" >
                {
                    list.map((item) => {
                    return  <li key={item.id}>
                                <Movie item = {item}  button={name}  onClick={handleClickName}/>
                            </li>
                    })
                } 
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        MovieList: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    getData: () => { dispatch(getData())},
    addMovie: (movie) => { dispatch(addMovie(movie)) },
    removeMovie: (movie) => { dispatch(removeMovie(movie)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Netfix)