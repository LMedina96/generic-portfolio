const CertificationCard = ({certification: {img, title, organization, date}}) => {
    return (
        <div>
            <div className="card text-white">
                <img src={img} height={210} className="card-img-top p-3" alt={`Certificado de ${title}`} />
                <div className="card-body pt-0">
                    <p className="card-title h5">{title}</p>
                    <p className="card-subtitle h6">{organization}</p>
                    <footer className="card-text mb-2">{date}</footer>
                </div>
            </div>
        </div>
    )
}

export default CertificationCard
