import React, { useState } from 'react';
import '../componentes/Testimonios.css'

const CommentSection = () => {
  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState(''); 
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (userName && userComment) {
      const newComment = {
        id: Date.now(),
        userName: userName,
        userComment: userComment,
      };
      setComments([...comments, newComment]);
      setUserName('');
      setUserComment('');
    } else {
      alert('Por favor, llena ambos campos antes de enviar tu comentario.');
    }
  };

  return (
    <div className="comment-section">
      <h2>Añadir comentario</h2>
      <input 
        type="text"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Tu nombre de usuario"
      /> 
      <textarea IMPRIMIR EL MENSAJE 
        id="userComment"
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        placeholder="Tu comentario"
      ></textarea>
      <button onClick={addComment}>Añadir Comentario</button>
      <div id="commentDisplay">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <h4>{comment.userName}</h4>
            <p>{comment.userComment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

