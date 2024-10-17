// import styled from 'styled-components';
// import { Box } from 'reflexbox';
// import { Card } from '../../common-components/Card/Card';
// import { Caption } from '../../common-components/Caption/Caption';
// import { Description } from '../../common-components/Description/Description';
// import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo';
// import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../../shared/DesignTokens';
// const InformationGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr 70px;
// 	gap: ${Spaces.TWO};
// `;
// const HeroAvatar = styled.div`
// 	width: 100%;
// 	height: 70px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center;
// `;
// export function HeroCard() {
// 	return (
// 		<Card>
// 			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
// 				<Box>
// 					<Caption as="div" color={Colors.GRAY_600}>
// 						Bruce Wayne
// 					</Caption>
// 					<Box mb={Spaces.ONE}>
// 						<HeadingTwo>Batman</HeadingTwo>
// 					</Box>
// 					<Description as="div" color={Colors.GRAY_700}>
// 						<strong>Universo:</strong> DC Comics
// 					</Description>
// 					<Description as="div" color={Colors.GRAY_700}>
// 						<strong>Nota atual:</strong> 5
// 					</Description>
// 				</Box>
// 				<HeroAvatar src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg" />
// 			</InformationGrid>
// 			<Box width="87px">
// 				<ButtonLink>Ver Mais</ButtonLink>
// 			</Box>
// 		</Card>
// 	);
// }

// -----------------HEROCARD ALTERADO PARA RECEBER PROPS DINAMICAS -------------

import styled from 'styled-components';
import { Box } from 'reflexbox';
import { Card } from '../../common-components/Card/Card';
import { Caption } from '../../common-components/Caption/Caption';
import { Description } from '../../common-components/Description/Description';
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../../shared/DesignTokens';

const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;

const HeroAvatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

// Alterado para aceitar props dinâmicas
export function HeroCard({ secretIdentity, name, picture, universe, id }) {
	return (
		<Card>
			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
				<Box>
					{/* Alterado: a identidade secreta agora é recebida como prop */}
					<Caption as="div" color={Colors.GRAY_600}>
						{secretIdentity}
					</Caption>
					<Box mb={Spaces.ONE}>
						{/* Alterado: o nome do herói agora é recebido como prop */}
						<HeadingTwo>{name}</HeadingTwo>
					</Box>
					{/* Alterado: o universo agora é recebido como prop */}
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Universo:</strong> {universe}
					</Description>
					{/* Alterado: a nota atual foi alterada para um hífen '-' como valor padrão */}
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Nota atual:</strong> -
					</Description>
				</Box>
				{/* Alterado: a imagem do herói agora é recebida como prop */}
				<HeroAvatar src={picture} />
			</InformationGrid>
			<Box width="87px">
				<ButtonLink>Ver Mais</ButtonLink>
			</Box>
		</Card>
	);
}
