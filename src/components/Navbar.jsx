import React from 'react';
import '../styles/pages.css';

const Navbar = () =>{
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

export default Navbar;