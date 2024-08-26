
function Testimonios_coments() {
  
    return (
    
        <div class="comentarios">

            <div class="comment-box">
               <h3>Deja tu comentario</h3>
               <input type="text" id="userName" placeholder="Tu nombre"/>
               <textarea id="userComment" rows="4" placeholder="Escribe tu comentario aquí..."></textarea>
               <button className="comiboton" onclick="addComment()">Enviar</button>
            </div>
        
            <div class="comment-display" id="commentDisplay">
                <h3>Comentarios:</h3>
            </div>
        </div>
    
      );
    }
    
  export default Testimonios_coments;