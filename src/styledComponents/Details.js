
import styled, { keyframes } from 'styled-components';

// keyframes returns a unique name based on a hash of the contents of the keyframes
const extendOut = keyframes`
  from {
    max-height: 0;
	overflow: hidden;
  }

  to {
    max-height: 300px;
	overflow: hidden;
  }
`;

  


const Details = styled.div`
	marging-top: 25px;
	display: inline-block;
	animation: ${extendOut} 1s ease-in 1;
	padding: 1em;
	width:auto;
	height:auto;
	z-index: 5;
	font-size: 15px;
`;

export default Details;