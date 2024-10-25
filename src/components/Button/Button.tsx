import { ButtonProps } from "../../types"
import "./button.scss"

const Button: React.FC<ButtonProps> = ({ triggerModal, targetModal, action, children }) => {
  return (
    <button type="button" onClick={action} className="btn button fw-bold" {...(triggerModal ? { 'data-bs-toggle': 'modal', 'data-bs-target': targetModal } : {})}>
      {children}
    </button>
  )
}

export default Button
