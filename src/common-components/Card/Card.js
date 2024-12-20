import styled from 'styled-components';
import { Colors, BorderRadiuses } from '../../shared/DesignTokens'; // Importação correta

export const Card = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid ${Colors.GRAY_200};
	border-radius: ${BorderRadiuses.ONE}; // Agora funcionará corretamente
`;
