
  function Buttons({title, onClick, isActive}) { /*posso fare il destructuring e al posto del props mettere title che è l'info che mi serve*/

    const active = isActive ? "active" : ""
    return(
        <>
         <button className={`btn  ${active}`} onClick={onClick}>{ title }</button>
         
        </>
       
    )
  }

  export default Buttons