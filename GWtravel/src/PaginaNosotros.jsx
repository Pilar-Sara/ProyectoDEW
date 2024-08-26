import React from 'react';
import CuerpoNosotros from './componentes/CuerpoNosotros'
import ValoresNosotros from './componentes/ValoresNosotros';
import Puntos from './componentes/Puntos';

function PaginaNosotros(){
  return(
    <>
    <CuerpoNosotros/>
    <Puntos/>
    <ValoresNosotros/>
    <Puntos/>
    </>
  );
}
export default PaginaNosotros;