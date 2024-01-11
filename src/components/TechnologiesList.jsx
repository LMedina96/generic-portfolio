import '../styles/technologiesStyle.css'
import { Icon } from '@iconify/react';
import { technologiesList } from '../utils/technologiesList';
import { useTranslation } from 'react-i18next';


const TechnologiesList = () => {

    const { t } = useTranslation() 

    return (
        <div id='technologies' className="container">
            <h2 className="my-4">{t('technologies')}</h2>
            <div className='row justify-content-center'>
                {
                    technologiesList.map((tech) => (
                        <div key={tech.icon} className="techIcon col-4 text-center">
                            <Icon icon={tech.icon} width="60" height="60" />
                            <p className='opacity-0'>{tech.technologie}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
        </div>
    )
}

export default TechnologiesList;
