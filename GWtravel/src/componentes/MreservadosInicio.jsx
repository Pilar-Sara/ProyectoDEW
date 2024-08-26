import React from 'react';
import Reservado from './Reservado';
import aqpimg from '../imagenes/r-arequipa.png';
import aqpvideo from '../videos/video-aqp.mp4';
import iquiimg from '../imagenes/r-tarapoto.png';
import iquivideo from '../videos/video-iquitos.mp4';
import cuscoimg from '../imagenes/r-cusco.png';
import machuvideo from '../videos/video-cusco.mp4';
import punoimg from '../imagenes/r-puno.png';
import punovideo from '../videos/video-puno.mp4';
import huacaimg from '../imagenes/r-huacachina.png';
import huacavideo from '../videos/video-huacachina.mp4';
import truimg from '../imagenes/r-trujillo.png';
import truvideo from '../videos/video-trujillo.mp4';


function MReservadosInicio() {
  return (
    <div className="mas-reservados">
      <Reservado imgSrc={aqpimg} videoSrc={aqpvideo} altText="Arequipa" />
      <Reservado imgSrc={iquiimg} videoSrc={iquivideo} altText="Iquitos" />
      <Reservado imgSrc={cuscoimg} videoSrc={machuvideo} altText="Machu Picchu" />
      <Reservado imgSrc={punoimg} videoSrc={punovideo} altText="Puno" />
      <Reservado imgSrc={huacaimg} videoSrc={huacavideo} altText="Huacachina" />
      <Reservado imgSrc={truimg} videoSrc={truvideo} altText="Trujillo" />
      
    </div>
  );
}
export default MReservadosInicio;