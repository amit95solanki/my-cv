import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom"



const Header = styled(AppBar)`
background:#575ff8;
`

const Tab = styled(NavLink)`
font-size:20px;
margin-right: 20px;
color:inherit;
text-decoration:none;

@media (max-width:400px){
        font-size: 15px;
}

`
export default function Navbar() {

    return (
        <>
            
            <Header position="static">
                <Toolbar >
                    <Tab to="/" style={({isActive})=> {return{color: isActive ?"green":"white"}}} >
                        HOME
                    </Tab>
                    <Tab to="/about"  style={({isActive})=> {return{color: isActive ?"green":"white"}}} >
                        ABOUT
                    </Tab>
                    <Tab to="/qualification"  style={({isActive})=> {return{color: isActive ?"green":"white"}}}>
                        QUALIFICATION
                    </Tab>
                    <Tab to="/contact"  style={({isActive})=> {return{color: isActive ?"green":"white"}}}>
                        CONTACT
                    </Tab>
                </Toolbar>
            </Header>


          

        </>
    )
}