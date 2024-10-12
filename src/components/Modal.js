function Modal({handleShowModal}) {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center" onClick={handleShowModal}>
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black opacity-50"></div>
            
            {/* Modal container */}
            <div className="relative bg-white p-0 md:p-6 z-50 max-w-4xl w-full mx-4">
                {/* Video wrapper */}
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        title="video"
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/3h0_v1cdUIA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Modal;
