import React, {Component} from 'react';
import axios from 'axios'

class Apireddit extends Component{
    componentWillMount(){
        this.getReddit();
    }
    getReddit(){
        axios.get(`https://www.reddit.com/r/${this.state.subreddit}.json`).then(
            response => {
                const posts = response.data.data.children.map(object => object.data);
                this.setState({posts});
            }).catch(e =>{
                console.log(e.message);
        })
    }
    constructor(props){
        super(props);
        this.state ={
            posts:[],
            subreddit:'aww',

        }
        this.getReddit = this.getReddit.bind(this);
    }
    render(){
        return(
            <div>
                <h1>{`/r/${this.state.subreddit}`}</h1>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}
export default Apireddit