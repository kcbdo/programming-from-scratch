import React, { useState } from 'react';

function Home() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleClick = () => {
    setMostrarMensagem(true); // Altera o estado para 'true'
  };

  // Objeto de estilo para o container principal
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh', // Ocupa a maior parte da altura da viewport para centralizar melhor
    textAlign: 'center',
  };

  // Objeto de estilo para o botão
  const buttonStyle = {
    backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)', // Gradiente de cor
    color: 'white',
    padding: '20px 40px', // Aumenta o preenchimento para deixar o botão maior
    border: 'none',
    borderRadius: '30px', // Borda arredondada
    fontSize: '1.8em', // Aumenta o tamanho da fonte
    cursor: 'pointer',
    transition: 'all 0.3s ease', // Transição suave para efeitos
    boxShadow: '0 4px 15px 0 rgba(40, 116, 252, 0.75)', // Sombra para profundidade
    marginTop: '20px', // Espaço acima do botão
  };

  // Objeto de estilo para a mensagem
  const messageStyle = {
    fontSize: '2em',
    color: '#333',
    marginTop: '30px',
  };

  // Objeto de estilo para o coração
  const heartStyle = {
    fontSize: '3em',
    color: 'red',
    marginLeft: '10px',
  };

  return (
    <div style={containerStyle}>
      

      {/* O botão só será renderizado se 'mostrarMensagem' for falso */}
      {!mostrarMensagem && (
        <button
          style={buttonStyle}
          onClick={handleClick}
        >
          Clique aqui Gabriel Augusto
        </button>
      )}

      {/* A mensagem e o coração só serão renderizados se 'mostrarMensagem' for verdadeiro */}
      {mostrarMensagem && (
        <>
          <p style={messageStyle}>Boooom dia vagabundo, já amassou o bombril hoje?  <span style={heartStyle}>❤️</span> </p>
          
        </>
      )}
    </div>
  );
}

export default Home;