import React, { useState } from 'react';

import styles from './Main.module.css';

import image1 from '../../assets/images/image1.svg';

import copy from "copy-to-clipboard"; 

import axios from 'axios';

import iconBrandRecognition from '../../assets/images/iconBrandRecognition.svg';

import iconDetailedRecords from '../../assets/images/iconDetailedRecords.svg';

import iconFullyCustomizable from '../../assets/images/iconFullyCustomizable.svg';

import facebook from '../../assets/images/facebook.svg';

import instagram from '../../assets/images/instagram.svg';

import pinterest from '../../assets/images/pinterest.svg';

import twitter from '../../assets/images/twitter.svg';




class main extends React.Component {

    state = {
        url : [],
        link : ""
    }

    componentDidMount = () => {
        // console.log(this.state.url);
    }

    changeURLText = (e) => {
        this.setState({link : e.target.value});
    }
    
    ShortenURL = () => {
        var link = "https://api.shrtco.de/v2/shorten?url=" + this.state.link;
        if (this.state.link === ""){
            alert("Empty input")
        }else{
        console.log(link);
        axios.post(link,err => {
            
        }).then(res => {
            var obj = {
                link : this.state.link,
                shorten : res.data.result.short_link,
                key : this.state.url.length,
                text : "Copy"
            }
            var temp = [...this.state.url];
            temp.push(obj);
            this.setState({url : temp});
            console.log(this.state.url);
        })}
        
    }

    changeText = (key) => {
        console.log(key)
        var temp = [...this.state.url];
        temp[key].text = "Copied";
        copy(temp[key].shorten);  
        this.setState({url : temp});
    }



    
    render(){
        // console.log("Heloo")
        return(
        <div>
        <div className = {styles.Main}>
            <div className = {styles.card1}>
                <div className = {styles.divide1}>
                    <h1 className = {styles.heading1}>More than just shorter link</h1>
                    <p className = {styles.para1}>Build your brand's recognition and get detailed insights on how yor link are performing</p>
                    
                    <button className = {styles.Button} style = {{color :"white", float : "left",top : "20px",bgcolor : "#2acfcf",left : "20px" ,borderColor :"#2acfcf"}} >Get Started</button>
                </div>
                <div className = {styles.divide2}>
                    <img className = {styles.image1} src = {image1} alt="Random"/>
                </div>
            </div>
            
            
            <div className = {styles.URLinputBlock} >
                <div className = {styles.URLinputBlock2}>
                
                    <input onChange = {this.changeURLText} value = {this.state.link}  type = "text" className = {styles.urlInput} placeholder="   Shorten a link here..." />
                    <p  style = {{marginTop : '1px', color :"#f04d68"}}>Please add a link</p>
                </div>
                <div className = {styles.URLinputBlock3}>
                    <button className ={styles.linkButton} onClick = {() => this.ShortenURL()}  type = "submit" className = {styles.Button1} style = {{color :"white", float : "right",top : "20px",bgcolor : "#2acfcf",borderColor :"#2acfcf",marginLeft:"2vw"}} >Shorten It!</button>
                </div>
            </div>
            {this.state.url.map(data => (
                <div className = {styles.storeData} key = {data.key}>
                    <p className = {styles.leftData}>{data.link}</p>
                    <p className = {styles.rightData}>{data.shorten}</p>
                   
                    <button className = {styles.dataButton} style = {{backgroundColor : data.text === "Copy" ? '#2acfcf' : 'purple'}} onClick = {() => this.changeText(data.key)} type = "submit">{data.text} </button>
                </div>
            ))}
            
        
            
            <div className = {styles.CardBlock}>
                <h1>Advanced statistics</h1>
                <p>Track how your linkare performing on the web with our advanced statistics dashboard</p>
            </div>
            
                <div className = {styles.card5}>
                <div className = {styles.divide}>
                
                    <div className = {styles.card51}>
                    <div className = {styles.BlockImg1}>
                    
                        <img src = {iconBrandRecognition} alt = "iconBrandRecognition" />
                    </div>
                
                        <h1 className = {styles.subheading}>Brand Recognisation</h1>
                        
                        <p className = {styles.subpara}>Boost your brand recognisation with each click.Genric link don't mean a thing.Branded links help instill confidence in your content.</p>
                    </div>
                    <div className ={styles.dash}></div>
                    <div className = {styles.card52}>
                    <div className = {styles.BlockImg2}>
                        <img src = {iconDetailedRecords} alt = "iconDetailedRecords" />
                    </div>
                        <h1 className = {styles.subheading}>Detailed Records</h1>
                        <p className = {styles.subpara}>Gain insights into who is clicking your links.Knowing when and where people engage with your content help inform better decision.</p>
                    </div>
                    <div className ={styles.dash}></div>
                    <div className = {styles.card53}>
                    <div className = {styles.BlockImg3}>
                        <img src = {iconFullyCustomizable} alt = "iconFullyCustomizable" />
                    </div>
                        <h1 className = {styles.subheading}>Fully Customizable</h1>
                        <p className = {styles.subpara}>Improve Brand awerness and content discoverability through customizable links. supercharging audience engagement. </p>
                    </div>
                </div>
            </div>
            
            <div className = {styles.card7}>
            
                    <h1 className={styles.heading7}>Boost your link today</h1>
            
                    <button className = {styles.downButton} type ="submit">Get Started</button>
            </div>
        </div>
            <div className={styles.footer}>
                
                <div className ={styles.Footerlogo}>
                    <h1>Shortly</h1>
                </div>
                <div className={styles.contain}>
                <div className={styles.col}>
                    <h1>Features</h1>
                    <ul>
                    <li>Link Shorlisting </li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                    
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Resources</h1>
                    <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Company</h1>
                    <ul>
                    <li>About </li>
                    <li>Our team</li>
                    <li>Carrers</li>
                    <li>Contacts</li>
                    </ul>
                </div>
                <div className={styles.col , styles.col1} >

                    <ul>
                        <li><img src={facebook} width="32" alt = "Instagram" style={{width : '20px' , height : '20px'}} /></li>
                        <li><img src={twitter} width="32" alt = "Facebook" style={{width : '20px' , height : '20px'}} /></li>
                        <li><img src={pinterest} width="32" alt = "Linked In" style={{width : '32px' , height : '20px'}} /></li>
                        <li><img src={instagram} width="32" alt = "Twitter" style={{width : '20px' , height :'20px'}} /></li>
                    </ul>
                </div>
                
                </div>
                
                
            </div> 
        </div>
        )
    }
};

export default main; 