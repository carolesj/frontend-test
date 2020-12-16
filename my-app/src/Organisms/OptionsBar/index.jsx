import React from 'react';
import Options from 'Molecules/Options';
import './OptionsBar.scss';

const OptionsBar = () => (
    <div className='OptionsBar'>
        <span>Encontrados 20 heróis</span>
        <Options />
    </div>
);

export default OptionsBar;