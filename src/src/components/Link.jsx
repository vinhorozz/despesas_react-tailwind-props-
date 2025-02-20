export function Link(props){
    
    return(
        <>
          <a href={props.href} className="text-blue-600 font-bold hover:text-blue-100">
           {...props.children}</a>  
   
        </>
    )
}