import React, {Component} from 'react';
import AnimationDisplay from '../AnimationsDisplay/AnimationsDisplay';
import axios from 'axios';

class AnimationFetcher extends Component{
    constructor(props){
        super(props);
        this.state = {
            animations: []
        }
    }

    componentDidMount(){
        axios.get('/api/animations').then(res => {
            console.log(res)
            this.setState({
                animations: res.data
            })
        })
    }

    deleteAnimation = (id) => {
        axios.delete(`/api/animations/${id}`).then(res => {
            this.setState({
                animations: res.data
            })
        })
    }

    render(){
        const {animations} = this.state;
        const animationsToShow = animations.map(animation => {
            return <AnimationDisplay 
                    animationName={animation.name}
                    animationUrl={animation.url}
                    id={animation.id}
                    deleteAnimation={this.deleteAnimation}
                    key={animation.id}
                    />
        })
        return (
            <div>{animationsToShow}</div>
        )
    }
}

export default AnimationFetcher;