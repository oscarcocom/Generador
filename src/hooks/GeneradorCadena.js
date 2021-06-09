import { useState } from "react"


export const GeneradorCadena = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
 const newvalor =19;
        setValues({
            ...values,
            [ target.name ]: target.value
            
        });

    }

    return [ values, handleInputChange, reset ];

}
