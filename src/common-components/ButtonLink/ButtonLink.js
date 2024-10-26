// import styled from 'styled-components';
// import {
// 	Colors,
// 	Spaces,
// 	FontLetterSpacings,
// 	FontFamilies,
// 	FontWeights,
// 	FontSizes,
// } from '../../shared/DesignTokens';
// export const ButtonLink = styled.a`
// 	display: inline-flex;
// 	align-items: center;
// 	justify-content: center;
// 	border: none;
// 	outline: none;
// 	background: none;
// 	width: 100%;
// 	height: 40px;
// 	font-family: ${FontFamilies.PRIMARY};
// 	font-weight: ${FontWeights.REGULAR};
// 	color: ${Colors.BLUE_500};
// 	padding: ${Spaces.ONE} ${Spaces.TWO};
// 	cursor: pointer;
// 	transition: 200ms all ease;
// 	text-transform: uppercase;
// 	letter-spacing: ${FontLetterSpacings.MEDIUM};
// 	text-decoration: none;
// 	font-size: ${FontSizes.ONE_HALF};
// 	&amp;:hover {
// 		color: ${Colors.BLUE_550};
// 	}
// `;


// -------- Substituição de a por Link para navegação interna no React Router ---------------

// Alterado: Importado 'Link' do react-router-dom para substituir a tag 'a'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	Colors,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
	FontSizes,
} from '../../shared/DesignTokens';

// Alterado: Agora o componente ButtonLink é estilizado com base no 'Link' em vez de 'a'
export const ButtonLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	background: none;
	width: 100%;
	height: 40px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	color: ${Colors.BLUE_500};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
	text-transform: uppercase;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	text-decoration: none;
	font-size: ${FontSizes.ONE_HALF};

	// Mantida a estilização de hover para mudança de cor
	&amp;:hover {
		color: ${Colors.BLUE_550};
	}
`;
