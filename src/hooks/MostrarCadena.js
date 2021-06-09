import React from 'react'

export const MostrarCadena = ({todo, i}) => {
    return (
        <tr>
        <td
        key={ todo.cadena }
        >
                   { i + 1}. { todo.resultado }    
        </td>
       
      </tr>
    )
}
