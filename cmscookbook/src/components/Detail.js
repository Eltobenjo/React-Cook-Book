import React from 'react'

 const Detail = ({name}) => {
    const{ image,method }= name.fields
    return ( 
         <div>
          <h1>{name}</h1>
 <img src={image.fields.file.url} alt={name} title= {name} />

        <p>{method}</p>
       
            
        </div>
    )
}
export default Detail;