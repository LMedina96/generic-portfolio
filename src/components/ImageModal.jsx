const ImageModal = ({ img }) => {
    return (
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <img src={img} className="card-img-top p-3" alt={`${img} certification`} />
                </div>
            </div>
        </div>
    )
}

export default ImageModal
