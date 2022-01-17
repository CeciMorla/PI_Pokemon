import React from 'react';
import img from './img/LOGO-HENRY-04_w.png';
import style from './Footer.module.css';

const Footer = ()=>{
    return(
        <div className={style.container}>
            <h4 className={style.from}>By</h4>
            <h3 className={style.name}>CeciMorla</h3>
            <h4 className={style.to}>To</h4>
            <img src={img} alt='img' className={style.img}/>
        </div>
    )
}

export default Footer;