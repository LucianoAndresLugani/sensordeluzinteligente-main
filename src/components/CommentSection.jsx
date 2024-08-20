import { useState } from 'react';

const CommentSection = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    const commentObject = {
      username: username || 'Anónimo', // Si el nombre está vacío, se usa "Anónimo"
      comment: newComment,
    };
    setComments([...comments, commentObject]);
    setNewComment('');
    setUsername('');
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Comentarios</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.username}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
        <form onSubmit={addComment}>
          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Tu nombre (opcional)"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Comentario</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Escribe tu comentario aquí"
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentSection;
