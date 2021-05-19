import React from 'react';
import { Link } from 'react-router-dom';

import {AreaHeader} from './styled';

function Header(){
    return(
        <AreaHeader>
        <div className="container">
            <div className="logo">
                
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/login">Entre</Link></li>


                    </ul>
                    </nav>
                </div>
        </AreaHeader>
    );
}
export default Header;