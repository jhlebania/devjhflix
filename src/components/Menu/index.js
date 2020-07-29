import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu()
{
    return (
    //<header>
    <nav className="Menu">
        <Link to="/">
        <img className="Logo" src={Logo} alt="JHFlix Logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
        </Button>
    </nav>
    //    JHFlix Show!
    //</header>

    );
}

export default Menu;