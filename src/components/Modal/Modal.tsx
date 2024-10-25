import { ModalInfo } from "../../types"

const Modal: React.FC<ModalInfo> = ({ title, isForm, handler, reset, content, resetText = "Close", handlerText = "Save Changes" }) => {
    return (
        <div className="modal fade mw-80" id="formModal" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalLabel">{title}</h1>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    {!isForm && (<div className="modal-footer">
                        <button type="button" className="btn text-white bg-black" data-bs-dismiss="modal" onClick={handler}>{handlerText}</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={reset}>{resetText}</button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Modal
