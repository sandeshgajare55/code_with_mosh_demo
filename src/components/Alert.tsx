

interface Props{
    onClose:()=> void;
}

const Alert = ({onClose}:Props) => {
  return (
    <div>
        <p><b>The Second Component in 1 Div at APP.tsx </b></p>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        Welcome ALL 
        <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert

