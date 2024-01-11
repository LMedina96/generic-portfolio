import '../styles/certificationCardStyle.css'
import { certificationList } from "../utils/certificationList"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import ImageModal from "./ImageModal"
import CertificationCard from './CertificationCard'

const CertificationsList = () => {

    const [selectedImage, setSelectedImage] = useState('')
    const { t } = useTranslation()

    const useSelectedImage = (img) => {
        setSelectedImage(img)
    }

    return (
        <div id="certifications" className="container">
            <section className="row">
                <h2 className="my-4">{t('certifications')}</h2>
            </section>
            <section className="row itemsList">
                {
                    certificationList.map((certification) => (
                        <div key={certification.title} className="col-sm-12 col-md-6 col-lg-4 my-2">
                            <a data-bs-toggle="modal" data-bs-target="#imageModal" onClick={() => useSelectedImage(certification.img)}>
                                <CertificationCard certification={certification} />
                            </a>
                        </div>
                    ))
                }
            </section>

            <ImageModal img={selectedImage} />
        </div >
    )
}

export default CertificationsList
