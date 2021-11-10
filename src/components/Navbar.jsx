import React from 'react';
const Navbar = () => {
    let myStyles = {
        backgroundColor: '#FAF9F6',
        margin:'0px',
        padding: '0px',
        height: '60px',
        width: '100%',
        boxSizing: 'border-box',
        
    };
    let ulStyles = {
        display:'inline',
        color: 'black',
        fontSize:'20px',
        paddingLeft:'30px',
        display: 'inline-block',
        marginTop:'14px',
        clear: 'both',
        content: '',
        display: 'inline-block',

        }
    let menu = {
            float: 'left',
        }
    let anch = {
        marginBottom: '4px',
        display: 'inline-block',
    }
    let logoStyle = {
        float: 'Right',
    }
    let logoName = {
        display: 'inline-block',
    }
    return ( <div style={myStyles}>
        <div style={menu}>
            <ul>
                <li style={ulStyles}><a href='#' style={anch}>Home</a></li>
                <li style={ulStyles}>About</li>
                <li style={ulStyles}>Services</li>
                <li style={ulStyles}>Contact</li>
            </ul>
        </div>
        <div className="logo" style={logoStyle}>
            <h3 style={logoStyle}>ADMIN</h3>
        </div>
    </div> );
}
 
export default Navbar;