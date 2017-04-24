import styled from 'styled-components';


const Container = styled.div`
	display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
	display: -ms-flexbox;  /* TWEENER - IE 10 */
	display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
	display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
	flex-direction:column;
	justify-content:center;
	align-items: center;
`;



export default Container;