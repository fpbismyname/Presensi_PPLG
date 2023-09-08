import React from 'react';
import '../styles/pages.css';

class Navbar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='Navbar'>
                <h1 className='Nav_Brand'>PPLG</h1>
                <ul>
                    <li>Beranda</li>
                    <li>Daftar Absensi</li>
                    <li>Kontak</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;