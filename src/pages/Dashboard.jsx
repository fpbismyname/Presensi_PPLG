import React from 'react';
import '../styles/pages.css';
import Navbar from '../components/Navbar';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Navbar/>
        )
    }
}

export default Dashboard;