import styled, { keyframes } from 'styled-components';

// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Loader = styled.img`
  display: 'inline-block';
  animation: ${rotate360} 3s linear infinite;
	transform-origin: center;
	width:150px;
	height:150px;
	background-image: ${props => props.src ? props.src : 'none'};
	margin: 50px;

`;

export default Loader;