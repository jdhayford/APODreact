import styled from 'styled-components';


const Card = styled.div`
	flex:1;
	width:  ${props => props.width? props.width+"px" : "500px"};

	min-height:250px;
	display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
	display: -ms-flexbox;  /* TWEENER - IE 10 */
	display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
	display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
	flex-direction: column;
	justify-content: space-around;

	align-items:center;
	border-radius: 3px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	background-color: #fafafa;
	height: auto;

	margin-bottom: 30px;
`;



export default Card;