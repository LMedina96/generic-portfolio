import { useTranslation } from "react-i18next"

const NavBarItem = ({ href }) => {

    const { t } = useTranslation()

    return (
        <li className="nav-item btn btn-outline-primary rounded-4 col-sm-12 col-md-4 col-lg-2">
            <a className="nav-link" href={`#${href}`}>{t(href)}</a>
        </li>
    );
}

export default NavBarItem
