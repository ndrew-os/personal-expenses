import "./iconButton.scss"
import { ButtonProps } from "../../types"

const IconButton: React.FC<ButtonProps> = ({action, children}) => {
  return (
    <button className="icon-button" type="button" onClick={action}>
      {children}
    </button>
  )
}

export default IconButton
