import React from 'react'
import { HeaderBox, HeaderNav } from '../Styles';

const Header = () => {
    return (
        <HeaderBox>
            <HeaderNav>
                <select>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Kids">Kids</option>
                </select>
            </HeaderNav>
            <HeaderNav>Products</HeaderNav>
            <HeaderNav>Management</HeaderNav>
        </HeaderBox>
    )
}

export default Header;
