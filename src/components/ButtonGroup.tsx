

interface Props{
    children:string;
    color:string;
    onClick:()=>void;
}

const ButtonGroup = ({children,onClick,color}:Props)=>{
    return(
        <>
        <button className={'btn btn-'+color} onClick={onClick}>{children}</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-secondary">Secondary</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-success">Success</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-danger">Danger</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-warning">Warning</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-info">Info</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-light">Light</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-dark">Dark</button>&nbsp;&nbsp;
        <button type="button" className="btn btn-link">Link</button>&nbsp;&nbsp;
        </>
    )

}

export default ButtonGroup