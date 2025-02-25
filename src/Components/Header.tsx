import React, { useEffect, useState } from 'react'
import Logo from '../assets/1.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faDog, faUserDoctor, faHeart, faCircleInfo, faBars } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
    isMobile: boolean;
    contatosRef: React.RefObject<HTMLElement | null>;
    servicosRef: React.RefObject<HTMLElement | null>;
    // atendimentoRef: React.RefObject<HTMLElement | null>;
    missoesRef: React.RefObject<HTMLElement | null>;
    sobreRef: React.RefObject<HTMLElement | null>;
}
export default function Header({ isMobile, contatosRef, servicosRef,  missoesRef, sobreRef }: HeaderProps) {
    const [menu, SetMenu] = useState(false);
    function buttonMenu() {
        if (isMobile) {
            SetMenu(!menu);
        }
    }
    useEffect(() => {
        if (!isMobile) {
            SetMenu(false)
        }
    }, [isMobile]);

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        if (ref.current) {
        
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', });
        }
    };
    return (
        <nav className='vet__header'>
            <img src={Logo} alt="Vite logo" />
            <ul className={`my-links ${menu ? '' : 'hide'}`}>
                <li>
                    <button onClick={() => scrollToSection(contatosRef)}><FontAwesomeIcon icon={faAddressCard} />
                        Contatos</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(servicosRef)}><FontAwesomeIcon icon={faDog} />
                        Tipo de serviço</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(servicosRef)}><FontAwesomeIcon icon={faUserDoctor} />
                        Atendimento</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(missoesRef)}><FontAwesomeIcon icon={faHeart} />
                        Missões e valores</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(sobreRef)}><FontAwesomeIcon icon={faCircleInfo} />
                        Sobre</button>
                </li>
            </ul>
            <button onClick={buttonMenu} className="vet__header__mobile___btn">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    )
}
