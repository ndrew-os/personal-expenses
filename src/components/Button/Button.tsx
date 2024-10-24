import { ButtonProps } from "../../types"
import "./button.scss"

const Button: React.FC<ButtonProps> = ({action, children}) => {
  return (
    <button type="button" onClick={action} className="btn button fw-bold" data-bs-toggle="modal" data-bs-target="#formModal">
      {children}
    </button>
  )
}

export default Button
