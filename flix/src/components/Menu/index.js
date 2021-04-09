import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink';
import './menu.css';
import Button from '../Button/index';


function Menu(){
    return(

        <nav className="menu">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo Flix" />
            </Link>

            <Button as={Link} className="button-link" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    )
    
}

export default Menu;