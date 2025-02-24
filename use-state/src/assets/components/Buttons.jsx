import Cards from './Cards'

  function Buttons(props) { /*posso fare il destructuring e al posto del props mettere title che è l'info che mi serve*/
    return(
        <>
         <button >{ props.title }</button>
         <Cards />
        </>
       
    )
  }

  export default Buttons