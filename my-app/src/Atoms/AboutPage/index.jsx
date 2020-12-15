import React from 'react';
import {ReactComponent as Logo} from 'Assets/Logo/Logo.svg'
import './AboutPage.scss'

const AboutPage = () => (
    <div className='AboutPage'>
        <Logo />
        <h3>EXPLORE O UNIVERSO</h3>
        <span>Mergulhe no domínio de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</span>
    </div>
);

export default AboutPage;