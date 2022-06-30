import React from 'react';
// использование текущей даты: {new Date().getFullYear()}

function Footer(props) {
    return (
        <footer className='page-footer pink lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/maximmorenko/shop-project'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
