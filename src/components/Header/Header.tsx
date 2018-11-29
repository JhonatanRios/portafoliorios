import * as React from 'react';
import { Link } from "react-router-dom";
// @ts-ignore
import Headroom from 'react-headroom';

import './Header.scss';

interface HeaderProps {
    img?: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <section className="contHeader">
            <Headroom className="headroom" style={{position: 'fixed', left: 'inner', right: 'inner', top: 'inner'}}>
                <nav className="menu">
                    <div className="logo">
                        <Link to='/' className="linklogo">
                            <img src={props.img} alt="" />
                        </Link>
                        <a href="#" className="btn-menu" id="btn-menu">
                            <i className="icono fa fa-bars" aria-hidden="true">
                            </i>
                        </a>
                    </div>
                    <div className="enlaces" id="enlaces">
                        <Link to='/' className="public hvr-underline-from-left">
                            Inicio
                    </Link>
                        <Link to='/about' className="cupos hvr-underline-from-left">
                            Acerca de Mi
                    </Link>
                        <Link to='/project' className="historial hvr-underline-from-left">
                            Projectos
                    </Link>
                        <Link to='/contact' className="historial hvr-underline-from-left">
                            Contacto
                    </Link>
                    </div>
                </nav>
            </Headroom>
        </section>
    );
}