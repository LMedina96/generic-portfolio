import '../styles/headerStyle.css'
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar';

const Header = () => {

    const { t } = useTranslation()

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-4 mb-4">
                    <img src='./assets/foto-perfil.jpeg' className="profileImg" alt="Foto de Perfil" />
                </div>
                <div id='presentation' className="col-sm-12 col-md-8">
                    <p>{t("presentation1")}</p>
                    <p>{t("presentation2")}</p>
                </div>
            </div>
            <div className="row">
                <ul className='d-flex justify-content-end align-items-center socialList'>
                    <li>
                        <a href="mailto:forgitsuyay@gmail.com" target='_blank'><Icon icon="ic:outline-email" width="32" height="32" /></a>
                    </li>
                    <li>
                        <a href="https://wa.me/+5491126336580" target='_blank'><Icon icon="ic:baseline-whatsapp" width="32" height="32" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/suyay-forgit/" target='_blank'><Icon icon="ant-design:linkedin-outlined" width="32" height="32" /></a>
                    </li>
                    <li>
                        <a href="./assets/cv.pdf" target='_blank' download={'CV - Suyay Forgit'}>
                            <button type="button" className="cvButton btn btn-outline-primary"><b>CV</b> <Icon icon="material-symbols:download" /></button>
                        </a>
                    </li>
                </ul>
            </div>
            <NavBar />
            <hr />
        </div>
    )
}

export default Header
