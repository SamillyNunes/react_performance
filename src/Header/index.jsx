import { memo } from 'react';

import './header.css';

function Header({name}) {
  console.log('Componente HEADER renderizou!');
  
  return (
   <h3 className='header' >Bem-vindo {name} </h3>
  )
}

// o memo permite que pule a renderizacao de um componente quando as propriedades dele estao inalteradas
// nao eh interessante quando ha reatividade em um componente, como useState, useEffect
export const MemorizedHeader = memo(Header);