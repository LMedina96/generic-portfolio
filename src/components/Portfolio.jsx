import { useTranslation } from "react-i18next"
import { proyects } from "../utils/proyectsList"
import PortfolioCard from "./PortfolioCard"

const Portfolio = () => {

    const { t } = useTranslation()

    return (
        <div id='portfolio' className="container">
            <div className="row">
                <h2 className="my-4">{t('portfolio')}</h2>
            </div>
            <div className="row">
                {
                    proyects.map((proyect) => (
                        <div key={proyect.title} className="col-sm-12 col-md-12 col-lg-6 my-2">
                            <PortfolioCard proyect={proyect} />
                        </div>
                    ))
                }

            </div>

            <hr />
        </div>
    )
}

export default Portfolio
