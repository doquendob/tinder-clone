import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import Image from '../../helpers/Image';
import Tinder from '../../assets/tinder-logo.png';
import '../../components/Header/Header.css';
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className='header'>
         <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
         </IconButton>
         <Image src={Tinder} className={'header__logo'}></Image>
         <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
         </IconButton>
        </div>
    );
};

export default Header;