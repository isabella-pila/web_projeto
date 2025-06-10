import styled from 'styled-components';

// Aqui estamos criando e exportando o componente 'StyledButton'
// Ele é um <button> do HTML com os estilos que definirmos.
export const StyledButton = styled.button`
  /* Estilos que pegamos do seu CSS original */
  background-color: #ff6f61; /* Este é um vermelho/coral de exemplo */
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e65a50; /* Um tom um pouco mais escuro para o hover */
    transform: translateY(-2px); /* Efeito de "levantar" o botão */
  }

  &:active {
    transform: translateY(1px); /* Efeito de "pressionar" o botão */
  }
`;