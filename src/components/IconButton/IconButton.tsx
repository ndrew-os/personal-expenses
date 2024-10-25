import "./iconButton.scss"
import { ButtonProps } from "../../types"

const IconButton: React.FC<ButtonProps> = ({triggerModal, targetModal, action, children}) => {
  return (
    <button className="icon-button" type="button" onClick={action} {...(triggerModal ? { 'data-bs-toggle': 'modal', 'data-bs-target': targetModal } : {})}>
      {children}
    </button>
  )
}

export default IconButton
