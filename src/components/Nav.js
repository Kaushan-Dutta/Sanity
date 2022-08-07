import React from 'react';
import {NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Nav = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">KD's Blog</NavLink>
            <NavLink to="/post">Blog Post</NavLink>
            <NavLink to="/project">Projects</NavLink>
            <NavLink to="/about">About Me!</NavLink>
            <SocialIcon url="https://twitter.com/jaketrent" className='icon' />
            <SocialIcon url="https://twitter.com/jaketrent" className='icon' />
            <SocialIcon url="https://twitter.com/jaketrent" className='icon' />
        </nav>
    </header>
  )
}

export default Nav