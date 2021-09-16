import React from 'react';
import { HeaderInner, HeaderWrapper } from './style';
import Menu from './Menu';
import SocialMediaMenu from '../../SocialMediaMenu';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <h1>Steve Bargelt</h1>
                <Menu />
                <SocialMediaMenu />

            </HeaderInner>
        </HeaderWrapper>
    )
}

export default Header;