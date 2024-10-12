import React, { useState } from 'react';

// Componente principal de manejo de comentarios
export const PostComentario = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [respuesta, setRespuesta] = useState({ id: null, texto: '' });

  // Simulando petición a un backend
  const fetchComentarios = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    setComentarios(data.slice(0, 5)); // Limitar a 5 comentarios de ejemplo
  };

  const agregarComentario = () => {
    if (nuevoComentario) {
      const comentario = {
        id: comentarios.length + 1,
        texto: nuevoComentario,
        respuestas: [],
      };
      setComentarios([...comentarios, comentario]);
      setNuevoComentario('');
    }
  };

  const eliminarComentario = (id) => {
    const comentariosActualizados = comentarios.filter(comentario => comentario.id !== id);
    setComentarios(comentariosActualizados);
  };

  const responderComentario = (id) => {
    if (respuesta.texto) {
      const comentariosActualizados = comentarios.map(comentario => {
        if (comentario.id === id) {
          return {
            ...comentario,
            respuestas: [...comentario.respuestas, { texto: respuesta.texto }],
          };
        }
        return comentario;
      });
      setComentarios(comentariosActualizados);
      setRespuesta({ id: null, texto: '' });
    }
  };

  return (
    <div>
      <h2>Post de Comentarios</h2>

      <button onClick={fetchComentarios}>Cargar Comentarios</button>

      <div>
        <input
          type="text"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Agregar comentario" />
        <button onClick={agregarComentario}>Agregar</button>
      </div>

      <ul>
        {comentarios.map(comentario => (
          <li key={comentario.id}>
            <p>{comentario.texto}</p>
            <button onClick={() => eliminarComentario(comentario.id)}>Eliminar</button>

            {/* Formulario para agregar respuesta */}
            <div>
              <input
                type="text"
                placeholder="Responder..."
                value={respuesta.id === comentario.id ? respuesta.texto : ''}
                onChange={(e) => setRespuesta({ id: comentario.id, texto: e.target.value })} />
              <button onClick={() => responderComentario(comentario.id)}>Responder</button>
            </div>

            {/* Mostrar respuestas */}
            {comentario.respuestas.length > 0 && (
              <ul>
                {comentario.respuestas.map((respuesta, index) => (
                  <li key={index}>{respuesta.texto}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
