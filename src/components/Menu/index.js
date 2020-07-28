import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu()
{
    return (
    //<header>
    <nav className="Menu">
        <a href="/">
        <img className="Logo" src={Logo} alt="JHFlix Logo"/>
        </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
        </Button>
    </nav>
    //    JHFlix Show!
    //</header>

    );
}

export default Menu;