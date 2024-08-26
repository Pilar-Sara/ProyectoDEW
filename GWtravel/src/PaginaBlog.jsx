import { useState } from 'react'
import Zona1 from './componentes/Zona1Blog'
import ParteMedia from './componentes/ParteMediaBlog'
import Seccion1 from './componentes/Seccion1Blog'
import Section2 from './componentes/Seccion2Blog'


function PaginaBlog() {

  return (
    <>
      <Zona1 />
      <ParteMedia
        mencionado="Mencionado en"
        blog="BLOG"
        deviajes="de viajes"
        plane="PLANE"
        tour="TOUR"
        mundo="MUNDO VIAJES"
        playas="PLAYAS"
      />
      <Seccion1
        mancorah1="Máncora, playa y pueblo"
        textomancora="Máncora es una hermosa ciudad ubicada en la costa noroeste del Perú,
                     en el departamento de Piura. Se trata de uno de los balnearios más conocidos
                     del país. Sus aguas tibias y olas
                     grandes lo hacen ideal para practicar surf, bodyboard, entre otras actividades."
        montanah1="Montaña de los 7 Colores"
        textomontana="La montaña de los 7 Colores 
                    (también llamado Vinicunca o 
                    simplemente ‘montaña arcoíris’) 
                    es una de las nuevas y mejores 
                    atracciones del Perú. Ubicada a más 
                    de 100 kilómetros de la ciudad del Cusco"
        lagotiticacah1="El Lago Titicaca"
        textolago="El Titicaca es un lago de alta montaña que
                   cuenta con una rica biodiversidad, cielos azules
                   y atardeceres de ensueño, y es el hogar de antiguas
                  culturas altoandinas inmersas en las viejas costumbres.
                  A continuación, te invitamos a conocer más de este lago,
                  también conocido como el Mar de los Andes."    
      />
      <Section2
        manglaresh1="Los Manglares de Tumbes"          
        textomanglares="El Santuario Nacional Los Manglares 
                        de Tumbes se encuentra ubicado en 
                        la provincia y distrito de Zarumilla 
                        del departamento de Tumbes, Perú. 
                        El ecosistema manglar se distribuye
                        desde Boca Capones hasta Playa Hermosa Tumbes."
        elcanonh1="El Cañón del Colca"
        textoelcanon="El Cañón del Colca, una hermosa 
                    maravilla natural de Perú, es 
                    conocido por su notable profundidad, 
                    sus impresionantes vistas y su rico 
                    patrimonio cultural."
        oasish1="El oasis de Huacachina"
        textooasis="El oasis de Huacachina es el 
                        único oasis natural de Sudamérica
                        y está ubicado a 5 horas de Lima
                        y a 15 minutos de la ciudad de Ica,
                        en el sur de Perú."        
      />
    </>
  );
}

export default PaginaBlog