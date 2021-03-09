import React,{Component}from 'react';
import axios from 'axios'
import './style.css'

export default class Advice extends Component{

    constructor(props){
        super(props);
        this.state = {
            num:1,
            advice:""
        }
    }

    fetchAdvise = ()=>{
       this.setState({ num:Math.floor(Math.random()*216)+1})
        axios.get(`https://api.adviceslip.com/advice/${this.state.num}`)
            .then(res=>{
                let data = JSON.parse(res.data+'}');
                console.log(data)
                const {advice} = data.slip;
                this.setState({advice})
                console.log(advice)
              
                
            })
            .catch(err=>{
                console.log(err);
            })
    }
    componentDidMount(){
        this.fetchAdvise();

    }

    render(){
        return(
            <div className="Advise">
                <div className='card'>
                    <p>{this.state.advice}</p>
                    <button onClick={this.fetchAdvise}>Get Advise</button>
                </div>
            </div>
        );

    }

}
