import React , {Component} from 'react';

import { FaAlignRight } from 'react-icons/fa';

import Item from './Item/Item';

import ButtonLogin from '../Navigation/ButtonLogin/ButtonLogin';



import styles from '../Navigation.module.css';

class Navigation extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render(){
        return(
            <nav>
            
                <button onClick={this.Toggle} className = {styles.btn}>
                        <FaAlignRight />
                </button>
                    
                        
                        <ul className = {styles.show1}>
                        
                        <Item>Pricing</Item>
                        <Item>Discover</Item>
                        <Item>Learn</Item>
                        <button className = {styles.Button} style = {{color :"white", float : "right",top : "20px",bgcolor : "#2acfcf",left : "20px" ,borderColor :"#2acfcf"}} >Sign Up</button>
                        
                        <ButtonLogin /> 
                        
                    </ul>
                    
                    
                    <div  style = {{display : 'none'}} className = {this.state.toggle ? styles.show :styles.show1}>
                   
                    
                    <ul>
                    
                        <li>Price</li>
                        <li>Discover</li>
                        <li>Learn</li>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                    </ul>
                    
                </div>
            </nav>
        );
    }
};

export default Navigation;