import React from 'react';

function Header(props) {
    return (
        // меняем цвет наву, добавляем классНейм наву с названием цвета из палитры в библиотеке https://materializecss.com/color.html
        <nav className='deep-purple lighten-2 shadow' style={{marginBottom: '1rem'}}>
            <div className='nav-wrapper'>
                <a href='#' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/maximmorenko/shop-project'>
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
