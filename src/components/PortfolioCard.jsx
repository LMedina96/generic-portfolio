import { Icon } from "@iconify/react"
import '../styles/portfolioCardStyle.css'
import { useTranslation } from "react-i18next";

const PortfolioCard = ({ proyect: { img, title, description, technologies } }) => {

    const { t } = useTranslation()

    return (
        <div>
            <div className="card certCard w-100 text-white">
                <a href="#">
                    <img src={img} height={210} className="card-img-top p-3" alt={`Tablero de ${title}`} />
                </a>
                <div className="card-body d-flex flex-column justify-content-between align-items-center p-2">
                    <div className="mb-3">
                        <p className="card-title mx-2 h5">{title}</p>
                        <p className="card-subtitle mt-3 h6">{t(description)}</p>
                    </div>
                    <footer className="card-text d-flex flex-column flex-sm-row justify-content-between align-items-center w-100 p-3">
                        <ul className="d-flex p-0 m-0 mb-2 mb-sm-0">
                            {
                                technologies.map((tech) => (
                                    <li key={tech} className="mx-1">
                                        <Icon icon={tech} width={24} height={24} />
                                    </li>
                                ))
                            }
                        </ul>
                        <a href="" className="text-white" target="_blank">
                            <button type="button" className="btn btn-primary">
                                <i>{t('visitMe')}</i>
                            </button>
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard
