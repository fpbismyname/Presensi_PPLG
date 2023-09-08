import React from 'react';
import '../styles/pages.css';

const Navbar = () =>{
        return(
            <div className='Navbar'>
                <label className='Nav_Brand'>PPLG</label>
                <ul>
                    <li>Beranda</li>
                    <li>Daftar Absensi</li>
                    <li>Kontak</li>
                </ul>
            </div>
        )
    }

export default Navbar;