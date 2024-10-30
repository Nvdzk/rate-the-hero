// export function Details() {
// 	return <div>Hello, tela de detalhes!</div>;
// }

// ====== Refatoração e Estilização da Tela de Detalhes ===============================

// // Importa as dependências necessárias para estilização e componentes comuns
// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useHistory } from 'react-router';

// // Define um container centralizado para o conteúdo
// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// // Componente estilizado para o avatar do herói, com imagem de fundo e estilo
// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// // Grid para organizar os detalhes em três colunas com espaçamento
// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	// Função para navegação, permitindo o retorno à tela anterior
// 	const history = useHistory();
// 	const handleBack = () => {
// 		history.goBack();
// 	};

// 	return (
// 		<Container>
// 			{/* Flex para organizar o avatar e o campo de seleção lado a lado */}
// 			<Flex mt={Spaces.FOUR} as="section">
// 				<HeroAvatar src="https://www.superherodb.com/pictures2/portraits/10/100/274.jpg" />
// 				<Flex
// 					flexDirection="column"
// 					justifyContent="center"
// 					height={194}
// 					ml={Spaces.SEVEN}
// 				>
// 					<Flex>
// 						{/* SelectField para escolher a nota do herói */}
// 						<SelectField>
// 							<Option value="" selected disabled>
// 								Selecione a nota
// 							</Option>
// 							<Option>5</Option>
// 							<Option>4</Option>
// 							<Option>3</Option>
// 							<Option>2</Option>
// 							<Option>1</Option>
// 						</SelectField>
// 						<Box ml={Spaces.THREE}>
// 							<Button>Atribuir</Button>
// 						</Box>
// 					</Flex>
// 				</Flex>
// 			</Flex>

// 			{/* Seção com título e descrição do herói */}
// 			<Box my={Spaces.ONE_HALF} as="section">
// 				<HeadingTwo as="h1">Captain America</HeadingTwo>
// 				<Description color={Colors.GRAY_700}>
// 					Steve Rogers - Marvel
// 				</Description>
// 			</Box>

// 			{/* Grid de detalhes com cartões para exibir informações */}
// 			<DetailsGrid>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Codinomes</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							Cap, Cap. Rogers
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Local de Nascimento</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							Brooklyn - NY
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Primeira HQ</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							Captain America Comics #1
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Informações Biológicas</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Genero: </strong> Masculino
// 							<br />
// 							<strong>Raça: </strong> Humano
// 							<br />
// 							<strong>Altura: </strong> 1,88 m
// 							<br />
// 							<strong>Peso: </strong> 95 kg
// 							<br />
// 							<strong>Cor do olho: </strong> Azul
// 							<br />
// 							<strong>Cor do cabelo: </strong> Loiro
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Atributos</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Força: </strong> 100
// 							<br />
// 							<strong>Inteligência: </strong> 100
// 							<br />
// 							<strong>Velocidade: </strong> 100
// 							<br />
// 							<strong>Resistência: </strong> 100
// 							<br />
// 							<strong>Poder: </strong> 100
// 							<br />
// 							<strong>Combate: </strong> 100
// 						</Description>
// 					</Box>
// 				</Card>
// 			</DetailsGrid>

// 			{/* Botão de voltar, centralizado */}
// 			<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 				<Box>
// 					<Button ghost onClick={handleBack}>
// 						Voltar
// 					</Button>
// 				</Box>
// 			</Flex>
// 		</Container>
// 	);
// }

// >>>>>>>>>>>>>>>> Usehistory está em desuso. Feito a troca para usenavigate <<<<<<<<<<<<<<<


// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// // Substituição do useHistory para useNavigate, devido à mudança no react-router v6+
// import { useNavigate } from 'react-router-dom';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	/* Definição da imagem de fundo do avatar do herói */
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	/* Layout em grade para os detalhes do herói */
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	// useNavigate substitui o useHistory para navegação no react-router v6+
// 	const navigate = useNavigate(); 
// 	const handleBack = () => {
// 		// Função para voltar à página anterior
// 		navigate(-1); 
// 	};

// 	return (
// 		<Container>
// 			<Flex mt={Spaces.FOUR} as="section">
// 				<HeroAvatar src="https://www.superherodb.com/pictures2/portraits/10/100/274.jpg" />
// 				<Flex
// 					flexDirection="column"
// 					justifyContent="center"
// 					height={194}
// 					ml={Spaces.SEVEN}
// 				>
// 					<Flex>
// 						{/* Campo de seleção para atribuir uma nota ao herói */}
// 						<SelectField>
// 							<Option value="" selected disabled>
// 								Selecione a nota
// 							</Option>
// 							<Option>5</Option>
// 							<Option>4</Option>
// 							<Option>3</Option>
// 							<Option>2</Option>
// 							<Option>1</Option>
// 						</SelectField>
// 						<Box ml={Spaces.THREE}>
// 							{/* Botão para enviar a nota */}
// 							<Button>Atribuir</Button>
// 						</Box>
// 					</Flex>
// 				</Flex>
// 			</Flex>
// 			<Box my={Spaces.ONE_HALF} as="section">
// 				{/* Informações do herói como título e descrição */}
// 				<HeadingTwo as="h1">Captain America</HeadingTwo>
// 				<Description color={Colors.GRAY_700}>
// 					Steve Rogers - Marvel
// 				</Description>
// 			</Box>
// 			<DetailsGrid>
// 				{/* Cartões exibindo detalhes do herói */}
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Codinomes</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							Cap, Cap. Rogers
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Local de Nascimento</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							Brooklyn - NY
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Primeira HQ</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							Captain America Comics #1
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Informações Biológicas</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Genero: </strong> Masculino
// 							<br />
// 							<strong>Raça: </strong> Humano
// 							<br />
// 							<strong>Altura: </strong> 1,88 m
// 							<br />
// 							<strong>Peso: </strong> 95 kg
// 							<br />
// 							<strong>Cor do olho: </strong> Azul
// 							<br />
// 							<strong>Cor do cabelo: </strong> Loiro
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Atributos</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Força: </strong> 100
// 							<br />
// 							<strong>Inteligência: </strong> 100
// 							<br />
// 							<strong>Velocidade: </strong> 100
// 							<br />
// 							<strong>Resistência: </strong> 100
// 							<br />
// 							<strong>Poder: </strong> 100
// 							<br />
// 							<strong>Combate: </strong> 100
// 						</Description>
// 					</Box>
// 				</Card>
// 			</DetailsGrid>
// 			<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 				<Box>
// 					{/* Botão Voltar para retornar à página anterior usando navigate */}
// 					<Button ghost onClick={handleBack}>
// 						Voltar
// 					</Button>
// 				</Box>
// 			</Flex>
// 		</Container>
// 	);
// }


// >>>>> Refatoração do Componente Details para Uso do Hook useHero <<<<<<<<<<<<<<<<<<<<

// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// // Importação do useNavigate do react-router-dom para substituir useHistory
// import { useNavigate, useParams } from 'react-router-dom';
// // Importação do hook personalizado useHero para obter dados do herói
// import { useHero } from '../hooks/useHero';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	/* Definição da imagem de fundo do avatar do herói */
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	/* Layout em grade para os detalhes do herói */
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	// useNavigate substitui o useHistory para navegação no react-router v6+
// 	const navigate = useNavigate(); 
// 	// useParams para obter o id do herói atual da URL
// 	const { id } = useParams();
// 	// Hook personalizado useHero para buscar os dados do herói com base no id
// 	const { hero, isLoadingHero } = useHero(id);

// 	// Função para retornar à página anterior usando o navigate
// 	const handleBack = () => {
// 		navigate(-1); 
// 	};

// 	// Log para visualizar o conteúdo de hero durante o desenvolvimento
// 	console.log(hero);

// 	return (
// 		<Container>
// 			<Flex mt={Spaces.FOUR} as="section">
// 				{/* Verificação se o herói está carregando para exibir a imagem */}
// 				<HeroAvatar src={isLoadingHero ? '' : hero.imageUrl} />
// 				<Flex
// 					flexDirection="column"
// 					justifyContent="center"
// 					height={194}
// 					ml={Spaces.SEVEN}
// 				>
// 					<Flex>
// 						{/* Campo de seleção para atribuir uma nota ao herói */}
// 						<SelectField>
// 							<Option value="" selected disabled>
// 								Selecione a nota
// 							</Option>
// 							<Option>5</Option>
// 							<Option>4</Option>
// 							<Option>3</Option>
// 							<Option>2</Option>
// 							<Option>1</Option>
// 						</SelectField>
// 						<Box ml={Spaces.THREE}>
// 							{/* Botão para enviar a nota */}
// 							<Button>Atribuir</Button>
// 						</Box>
// 					</Flex>
// 				</Flex>
// 			</Flex>
// 			<Box my={Spaces.ONE_HALF} as="section">
// 				{/* Exibição condicional dos dados do herói após carregamento */}
// 				<HeadingTwo as="h1">
// 					{isLoadingHero ? 'Carregando...' : hero.name}
// 				</HeadingTwo>
// 				<Description color={Colors.GRAY_700}>
// 					{isLoadingHero ? '' : `${hero.alias} - ${hero.universe}`}
// 				</Description>
// 			</Box>
// 			<DetailsGrid>
// 				{/* Cartões exibindo detalhes do herói */}
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Codinomes</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							{isLoadingHero ? '' : hero.nicknames.join(', ')}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Local de Nascimento</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							{isLoadingHero ? '' : hero.birthPlace}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Primeira HQ</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							{isLoadingHero ? '' : hero.firstComic}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Informações Biológicas</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Genero: </strong>{isLoadingHero ? '' : hero.gender}
// 							<br />
// 							<strong>Raça: </strong>{isLoadingHero ? '' : hero.race}
// 							<br />
// 							<strong>Altura: </strong>{isLoadingHero ? '' : hero.height}
// 							<br />
// 							<strong>Peso: </strong>{isLoadingHero ? '' : hero.weight}
// 							<br />
// 							<strong>Cor do olho: </strong>{isLoadingHero ? '' : hero.eyeColor}
// 							<br />
// 							<strong>Cor do cabelo: </strong>{isLoadingHero ? '' : hero.hairColor}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Atributos</Caption>
// 						</Box>
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Força: </strong>{isLoadingHero ? '' : hero.attributes.strength}
// 							<br />
// 							<strong>Inteligência: </strong>{isLoadingHero ? '' : hero.attributes.intelligence}
// 							<br />
// 							<strong>Velocidade: </strong>{isLoadingHero ? '' : hero.attributes.speed}
// 							<br />
// 							<strong>Resistência: </strong>{isLoadingHero ? '' : hero.attributes.durability}
// 							<br />
// 							<strong>Poder: </strong>{isLoadingHero ? '' : hero.attributes.power}
// 							<br />
// 							<strong>Combate: </strong>{isLoadingHero ? '' : hero.attributes.combat}
// 						</Description>
// 					</Box>
// 				</Card>
// 			</DetailsGrid>
// 			<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 				<Box>
// 					{/* Botão Voltar para retornar à página anterior usando navigate */}
// 					<Button ghost onClick={handleBack}>
// 						Voltar
// 					</Button>
// 				</Box>
// 			</Flex>
// 		</Container>
// 	);
// }


// >>>> Atualização das Referências de Dados do Objeto hero nas Renderizações Condicionais <<<<

// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	console.log(hero);

// 	return (
// 		<Container>
// 			<Flex mt={Spaces.FOUR} as="section">
// 				{/* Renderiza imagem usando o valor de `hero.image.url` */}
// 				<HeroAvatar src={hero.image.url} />
// 				<Flex
// 					flexDirection="column"
// 					justifyContent="center"
// 					height={194}
// 					ml={Spaces.SEVEN}
// 				>
// 					<Flex>
// 						{/* Campo de seleção com valor padrão atualizado para vazio */}
// 						<SelectField defaultValue="">
// 							<Option value="" disabled>
// 								Selecione a nota
// 							</Option>
// 							<Option>5</Option>
// 							<Option>4</Option>
// 							<Option>3</Option>
// 							<Option>2</Option>
// 							<Option>1</Option>
// 						</SelectField>
// 						<Box ml={Spaces.THREE}>
// 							<Button>Atribuir</Button>
// 						</Box>
// 					</Flex>
// 				</Flex>
// 			</Flex>
// 			<Box my={Spaces.ONE_HALF} as="section">
// 				{/* Renderiza nome e editora usando `hero.biography` */}
// 				<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 				<Description color={Colors.GRAY_700}>
// 					{hero.biography['full-name']} - {hero.biography.publisher}
// 				</Description>
// 			</Box>
// 			<DetailsGrid>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Codinomes</Caption>
// 						</Box>
// 						{/* Renderiza codinomes usando `hero.biography.aliases` */}
// 						<Description color={Colors.GRAY_700}>
// 							{hero.biography.aliases.join(', ')}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Local de Nascimento</Caption>
// 						</Box>
// 						{/* Renderiza local de nascimento usando `hero.biography['place-of-birth']` */}
// 						<Description color={Colors.GRAY_700}>
// 							{hero.biography['place-of-birth']}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Primeira HQ</Caption>
// 						</Box>
// 						{/* Renderiza primeira HQ usando `hero.biography['first-appearance']` */}
// 						<Description color={Colors.GRAY_700}>
// 							{hero.biography['first-appearance']}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Informações Biológicas</Caption>
// 						</Box>
// 						{/* Renderiza informações biológicas usando `hero.appearance` */}
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Genero: </strong> {hero.appearance.gender}
// 							<br />
// 							<strong>Raça: </strong> {hero.appearance.race}
// 							<br />
// 							<strong>Altura: </strong> {hero.appearance.height[1]}
// 							<br />
// 							<strong>Peso: </strong> {hero.appearance.weight[1]}
// 							<br />
// 							<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 							<br />
// 							<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 						</Description>
// 					</Box>
// 				</Card>
// 				<Card>
// 					<Box p={Spaces.TWO}>
// 						<Box mb={Spaces.ONE}>
// 							<Caption>Atributos</Caption>
// 						</Box>
// 						{/* Renderiza atributos usando `hero.powerstats` */}
// 						<Description color={Colors.GRAY_700}>
// 							<strong>Força: </strong> {hero.powerstats.strength}
// 							<br />
// 							<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 							<br />
// 							<strong>Velocidade: </strong> {hero.powerstats.speed}
// 							<br />
// 							<strong>Resistência: </strong> {hero.powerstats.durability}
// 							<br />
// 							<strong>Poder: </strong> {hero.powerstats.power}
// 							<br />
// 							<strong>Combate: </strong> {hero.powerstats.combat}
// 						</Description>
// 					</Box>
// 				</Card>
// 			</DetailsGrid>
// 			<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 				<Box>
// 					<Button ghost onClick={handleBack}>
// 						Voltar
// 					</Button>
// 				</Box>
// 			</Flex>
// 		</Container>
// 	);
// }


// >>>>>>>>>>  TÍTULO: Condicional de Renderização do Hero <<<<<<<<<<<<<<<<


// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	return (
// 		!isLoadingHero && ( // Alteração: Condicional de renderização do Container
// 			<Container>
// 				<Flex mt={Spaces.FOUR} as="section">
// 					<HeroAvatar src={hero.image.url} />
// 					<Flex
// 						flexDirection="column"
// 						justifyContent="center"
// 						height={194}
// 						ml={Spaces.SEVEN}
// 					>
// 						<Flex>
// 							<SelectField defaultValue="">
// 								<Option value="" disabled>
// 									Selecione a nota
// 								</Option>
// 								<Option>5</Option>
// 								<Option>4</Option>
// 								<Option>3</Option>
// 								<Option>2</Option>
// 								<Option>1</Option>
// 							</SelectField>
// 							<Box ml={Spaces.THREE}>
// 								<Button>Atribuir</Button>
// 							</Box>
// 						</Flex>
// 					</Flex>
// 				</Flex>
// 				<Box my={Spaces.ONE_HALF} as="section">
// 					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 					<Description color={Colors.GRAY_700}>
// 						{hero.biography['full-name']} - {hero.biography.publisher}
// 					</Description>
// 				</Box>
// 				<DetailsGrid>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Codinomes</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography.aliases.join(', ')}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Local de Nascimento</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['place-of-birth']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Primeira HQ</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['first-appearance']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Informações Biológicas</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Genero: </strong> {hero.appearance.gender}
// 								<br />
// 								<strong>Raça: </strong> {hero.appearance.race}
// 								<br />
// 								<strong>Altura: </strong> {hero.appearance.height[1]}
// 								<br />
// 								<strong>Peso: </strong> {hero.appearance.weight[1]}
// 								<br />
// 								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 								<br />
// 								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Atributos</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Força: </strong> {hero.powerstats.strength}
// 								<br />
// 								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 								<br />
// 								<strong>Velocidade: </strong> {hero.powerstats.speed}
// 								<br />
// 								<strong>Resistência: </strong> {hero.powerstats.durability}
// 								<br />
// 								<strong>Poder: </strong> {hero.powerstats.power}
// 								<br />
// 								<strong>Combate: </strong> {hero.powerstats.combat}
// 							</Description>
// 						</Box>
// 					</Card>
// 				</DetailsGrid>
// 				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 					<Box>
// 						<Button ghost onClick={handleBack}>
// 							Voltar
// 						</Button>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		)
// 	);
// }


// ========= Integração do Formulário de Avaliação com Formik =================

// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';
// import { useFormik } from 'formik'; // Importação de Formik adicionada

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	// Formik: Inicializando o hook useFormik com valores iniciais e função de submissão
// 	const formik = useFormik({
// 		initialValues: {
// 			avaliation: '',
// 		},
// 		onSubmit: (values) => {
// 			console.log(values);
// 		},
// 	});

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	return (
// 		!isLoadingHero && (
// 			<Container>
// 				<Flex mt={Spaces.FOUR} as="section">
// 					<HeroAvatar src={hero.image.url} />
// 					<Flex
// 						flexDirection="column"
// 						justifyContent="center"
// 						height={194}
// 						ml={Spaces.SEVEN}
// 					>
// 						<Flex as="form" onSubmit={formik.handleSubmit}>
// 							<SelectField
// 								name="avaliation"
// 								onChange={formik.handleChange}
// 								value={formik.values.avaliation}
// 								defaultValue=""
// 							>
// 								<Option value="" disabled>
// 									Selecione a nota
// 								</Option>
// 								<Option>5</Option>
// 								<Option>4</Option>
// 								<Option>3</Option>
// 								<Option>2</Option>
// 								<Option>1</Option>
// 							</SelectField>
// 							<Box ml={Spaces.THREE}>
// 								<Button type="submit">Atribuir</Button>
// 							</Box>
// 						</Flex>
// 					</Flex>
// 				</Flex>
// 				<Box my={Spaces.ONE_HALF} as="section">
// 					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 					<Description color={Colors.GRAY_700}>
// 						{hero.biography['full-name']} - {hero.biography.publisher}
// 					</Description>
// 				</Box>
// 				<DetailsGrid>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Codinomes</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography.aliases.join(', ')}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Local de Nascimento</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['place-of-birth']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Primeira HQ</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['first-appearance']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Informações Biológicas</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Genero: </strong> {hero.appearance.gender}
// 								<br />
// 								<strong>Raça: </strong> {hero.appearance.race}
// 								<br />
// 								<strong>Altura: </strong> {hero.appearance.height[1]}
// 								<br />
// 								<strong>Peso: </strong> {hero.appearance.weight[1]}
// 								<br />
// 								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 								<br />
// 								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Atributos</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Força: </strong> {hero.powerstats.strength}
// 								<br />
// 								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 								<br />
// 								<strong>Velocidade: </strong> {hero.powerstats.speed}
// 								<br />
// 								<strong>Resistência: </strong> {hero.powerstats.durability}
// 								<br />
// 								<strong>Poder: </strong> {hero.powerstats.power}
// 								<br />
// 								<strong>Combate: </strong> {hero.powerstats.combat}
// 							</Description>
// 						</Box>
// 					</Card>
// 				</DetailsGrid>
// 				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 					<Box>
// 						<Button ghost onClick={handleBack}>
// 							Voltar
// 						</Button>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		)
// 	);
// }


// ===== Implementação de Formulário de Avaliação com useFormik para Controle de Estado =====

// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';
// import { useFormik } from 'formik';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	const formik = useFormik({
// 		initialValues: {
// 			avaliation: '',
// 		},
// 		onSubmit: (values) => {
// 			console.log(values);
// 		},
// 	});

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	return (
// 		!isLoadingHero && (
// 			<Container>
// 				<Flex mt={Spaces.FOUR} as="section">
// 					<HeroAvatar src={hero.image.url} />
// 					<Flex
// 						flexDirection="column"
// 						justifyContent="center"
// 						height={194}
// 						ml={Spaces.SEVEN}
// 					>
// 						{/* Formulário adicionado para integrar com o Formik */}
// 						<form onSubmit={formik.handleSubmit}>
// 							<Flex>
// 								<SelectField
// 									name="avaliation" // nome adicionado para controle de estado com Formik
// 									onChange={formik.handleChange} // permite que o Formik monitore as alterações no campo
// 									value={formik.values.avaliation} // liga o campo ao valor interno do estado do Formik
// 									required
// 								>
// 									<Option value="" disabled>
// 										Selecione a nota
// 									</Option>
// 									<Option>5</Option>
// 									<Option>4</Option>
// 									<Option>3</Option>
// 									<Option>2</Option>
// 									<Option>1</Option>
// 								</SelectField>
// 								<Box ml={Spaces.THREE}>
// 									<Button type="submit">Atribuir</Button>
// 								</Box>
// 							</Flex>
// 						</form>
// 					</Flex>
// 				</Flex>
// 				<Box my={Spaces.ONE_HALF} as="section">
// 					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 					<Description color={Colors.GRAY_700}>
// 						{hero.biography['full-name']} - {hero.biography.publisher}
// 					</Description>
// 				</Box>
// 				<DetailsGrid>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Codinomes</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography.aliases.join(', ')}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Local de Nascimento</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['place-of-birth']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Primeira HQ</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['first-appearance']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Informações Biológicas</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Genero: </strong> {hero.appearance.gender}
// 								<br />
// 								<strong>Raça: </strong> {hero.appearance.race}
// 								<br />
// 								<strong>Altura: </strong> {hero.appearance.height[1]}
// 								<br />
// 								<strong>Peso: </strong> {hero.appearance.weight[1]}
// 								<br />
// 								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 								<br />
// 								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Atributos</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Força: </strong> {hero.powerstats.strength}
// 								<br />
// 								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 								<br />
// 								<strong>Velocidade: </strong> {hero.powerstats.speed}
// 								<br />
// 								<strong>Resistência: </strong> {hero.powerstats.durability}
// 								<br />
// 								<strong>Poder: </strong> {hero.powerstats.power}
// 								<br />
// 								<strong>Combate: </strong> {hero.powerstats.combat}
// 							</Description>
// 						</Box>
// 					</Card>
// 				</DetailsGrid>
// 				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 					<Box>
// 						<Button ghost onClick={handleBack}>
// 							Voltar
// 						</Button>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		)
// 	);
// }


// ===== Implementação de Validação Visual com Alerta Usando Formik 
// ===== no Formulário de Avaliação de Heróis


// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';
// import { useFormik } from 'formik';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	const formik = useFormik({
// 		initialValues: {
// 			avaliation: '',
// 		},
// 		onSubmit: (values) => {
// 			console.log(values);
// 		},
// 	});

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	return (
// 		!isLoadingHero && (
// 			<Container>
// 				<Flex mt={Spaces.FOUR} as="section">
// 					<HeroAvatar src={hero.image.url} />
// 					<Flex flexDirection="column" justifyContent="center" height={194} ml={Spaces.SEVEN}>
// 						{/* Formulário atualizado com validação visual e alerta de erro */}
// 						<form onSubmit={formik.handleSubmit}>
// 							<Flex>
// 								<SelectField
// 									name="avaliation"
// 									onChange={formik.handleChange}
// 									value={formik.values.avaliation}
// 									required
// 								>
// 									<Option value="" disabled>
// 										Selecione a nota
// 									</Option>
// 									<Option>5</Option>
// 									<Option>4</Option>
// 									<Option>3</Option>
// 									<Option>2</Option>
// 									<Option>1</Option>
// 								</SelectField>
// 								<Box ml={Spaces.THREE}>
// 									<Button type="submit">Atribuir</Button>
// 								</Box>
// 							</Flex>
// 							<Box mt={Spaces.TWO}>
// 								<Alert type="error">
// 									Escolha uma nota para ser atribuída
// 								</Alert>
// 							</Box>
// 						</form>
// 					</Flex>
// 				</Flex>
// 				<Box my={Spaces.ONE_HALF} as="section">
// 					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 					<Description color={Colors.GRAY_700}>
// 						{hero.biography['full-name']} - {hero.biography.publisher}
// 					</Description>
// 				</Box>
// 				<DetailsGrid>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Codinomes</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography.aliases.join(', ')}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Local de Nascimento</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['place-of-birth']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Primeira HQ</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['first-appearance']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Informações Biológicas</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Genero: </strong> {hero.appearance.gender}
// 								<br />
// 								<strong>Raça: </strong> {hero.appearance.race}
// 								<br />
// 								<strong>Altura: </strong> {hero.appearance.height[1]}
// 								<br />
// 								<strong>Peso: </strong> {hero.appearance.weight[1]}
// 								<br />
// 								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 								<br />
// 								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Atributos</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Força: </strong> {hero.powerstats.strength}
// 								<br />
// 								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 								<br />
// 								<strong>Velocidade: </strong> {hero.powerstats.speed}
// 								<br />
// 								<strong>Resistência: </strong> {hero.powerstats.durability}
// 								<br />
// 								<strong>Poder: </strong> {hero.powerstats.power}
// 								<br />
// 								<strong>Combate: </strong> {hero.powerstats.combat}
// 							</Description>
// 						</Box>
// 					</Card>
// 				</DetailsGrid>
// 				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 					<Box>
// 						<Button ghost onClick={handleBack}>
// 							Voltar
// 						</Button>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		)
// 	);
// }


// ===== Adicionando a importação do Alert que não veio no codigo do professor


// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';
// import { useFormik } from 'formik';
// import { Alert } from '../common-components/Alert/Alert'; // Import do Alert

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	const formik = useFormik({
// 		initialValues: {
// 			avaliation: '',
// 		},
// 		onSubmit: (values) => {
// 			console.log(values);
// 		},
// 	});

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	return (
// 		!isLoadingHero && (
// 			<Container>
// 				<Flex mt={Spaces.FOUR} as="section">
// 					<HeroAvatar src={hero.image.url} />
// 					<Flex flexDirection="column" justifyContent="center" height={194} ml={Spaces.SEVEN}>
// 						<form onSubmit={formik.handleSubmit}>
// 							<Flex>
// 								<SelectField
// 									name="avaliation"
// 									onChange={formik.handleChange}
// 									value={formik.values.avaliation}
// 									required
// 								>
// 									<Option value="" disabled>
// 										Selecione a nota
// 									</Option>
// 									<Option>5</Option>
// 									<Option>4</Option>
// 									<Option>3</Option>
// 									<Option>2</Option>
// 									<Option>1</Option>
// 								</SelectField>
// 								<Box ml={Spaces.THREE}>
// 									<Button type="submit">Atribuir</Button>
// 								</Box>
// 							</Flex>
// 							{/* Utilizando o componente Alert */}
// 							<Box mt={Spaces.TWO}>
// 								{formik.values.avaliation === '' && (
// 									<Alert type="error" small>
// 										Escolha uma nota para ser atribuída
// 									</Alert>
// 								)}
// 							</Box>
// 						</form>
// 					</Flex>
// 				</Flex>
// 				<Box my={Spaces.ONE_HALF} as="section">
// 					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 					<Description color={Colors.GRAY_700}>
// 						{hero.biography['full-name']} - {hero.biography.publisher}
// 					</Description>
// 				</Box>
// 				<DetailsGrid>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Codinomes</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography.aliases.join(', ')}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Local de Nascimento</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['place-of-birth']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Primeira HQ</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['first-appearance']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Informações Biológicas</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Genero: </strong> {hero.appearance.gender}
// 								<br />
// 								<strong>Raça: </strong> {hero.appearance.race}
// 								<br />
// 								<strong>Altura: </strong> {hero.appearance.height[1]}
// 								<br />
// 								<strong>Peso: </strong> {hero.appearance.weight[1]}
// 								<br />
// 								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 								<br />
// 								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Atributos</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Força: </strong> {hero.powerstats.strength}
// 								<br />
// 								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 								<br />
// 								<strong>Velocidade: </strong> {hero.powerstats.speed}
// 								<br />
// 								<strong>Resistência: </strong> {hero.powerstats.durability}
// 								<br />
// 								<strong>Poder: </strong> {hero.powerstats.power}
// 								<br />
// 								<strong>Combate: </strong> {hero.powerstats.combat}
// 							</Description>
// 						</Box>
// 					</Card>
// 				</DetailsGrid>
// 				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 					<Box>
// 						<Button ghost onClick={handleBack}>
// 							Voltar
// 						</Button>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		)
// 	);
// }


// ===== Implementação de Validação com Yup e Formik =======

// import styled from 'styled-components';
// import { Flex, Box } from 'reflexbox';
// import {
// 	BorderRadiuses,
// 	Colors,
// 	Shadows,
// 	Spaces,
// } from '../shared/DesignTokens';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Button } from '../common-components/Button/Button';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { Description } from '../common-components/Description/Description';
// import { Card } from '../common-components/Card/Card';
// import { Caption } from '../common-components/Caption/Caption';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useHero } from '../hooks/useHero';
// import { useFormik } from 'formik';
// import * as yup from 'yup'; // Biblioteca Yup para validação
// import { Alert } from '../common-components/Alert/Alert';

// const Container = styled.aside`
// 	width: 727px;
// 	margin: 0 auto;
// `;

// const HeroAvatar = styled.div`
// 	width: 344px;
// 	height: 194px;
// 	box-shadow: ${Shadows.ONE};
// 	border-radius: ${BorderRadiuses.ONE};
// 	background-image: url('${(props) => props.src}');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center 25%;
// `;

// const DetailsGrid = styled.section`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// 	gap: ${Spaces.TWO};
// `;

// export function Details() {
// 	const navigate = useNavigate();
// 	const { id } = useParams();
// 	const { hero, isLoadingHero } = useHero(id);

// 	// Configuração do Formik com validação Yup
// 	const formik = useFormik({
// 		initialValues: {
// 			avaliation: '',
// 		},
// 		validationSchema: yup.object().shape({
// 			avaliation: yup.string().required(),
// 		}),
// 		onSubmit: (values) => {
// 			console.log(values);
// 		},
// 	});

// 	const handleBack = () => {
// 		navigate(-1);
// 	};

// 	return (
// 		!isLoadingHero && (
// 			<Container>
// 				<Flex mt={Spaces.FOUR} as="section">
// 					<HeroAvatar src={hero.image.url} />
// 					<Flex flexDirection="column" justifyContent="center" height={194} ml={Spaces.SEVEN}>
// 						<form onSubmit={formik.handleSubmit} noValidate> {/* Alteração: adição de noValidate */}
// 							<Flex>
// 								<SelectField
// 									name="avaliation"
// 									onChange={formik.handleChange}
// 									value={formik.values.avaliation}
// 									required
// 								>
// 									<Option value="" disabled>
// 										Selecione a nota
// 									</Option>
// 									<Option>5</Option>
// 									<Option>4</Option>
// 									<Option>3</Option>
// 									<Option>2</Option>
// 									<Option>1</Option>
// 								</SelectField>
// 								<Box ml={Spaces.THREE}>
// 									<Button type="submit">Atribuir</Button>
// 								</Box>
// 							</Flex>
// 							{formik.errors.avaliation && ( /* Condicional que mostra o alerta de erro */
// 								<Box mt={Spaces.TWO}>
// 									<Alert type="error">
// 										Escolha uma nota para ser atribuída
// 									</Alert>
// 								</Box>
// 							)}
// 						</form>
// 					</Flex>
// 				</Flex>
// 				<Box my={Spaces.ONE_HALF} as="section">
// 					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
// 					<Description color={Colors.GRAY_700}>
// 						{hero.biography['full-name']} - {hero.biography.publisher}
// 					</Description>
// 				</Box>
// 				<DetailsGrid>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Codinomes</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography.aliases.join(', ')}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Local de Nascimento</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['place-of-birth']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Primeira HQ</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								{hero.biography['first-appearance']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Informações Biológicas</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Genero: </strong> {hero.appearance.gender}
// 								<br />
// 								<strong>Raça: </strong> {hero.appearance.race}
// 								<br />
// 								<strong>Altura: </strong> {hero.appearance.height[1]}
// 								<br />
// 								<strong>Peso: </strong> {hero.appearance.weight[1]}
// 								<br />
// 								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
// 								<br />
// 								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
// 							</Description>
// 						</Box>
// 					</Card>
// 					<Card>
// 						<Box p={Spaces.TWO}>
// 							<Box mb={Spaces.ONE}>
// 								<Caption>Atributos</Caption>
// 							</Box>
// 							<Description color={Colors.GRAY_700}>
// 								<strong>Força: </strong> {hero.powerstats.strength}
// 								<br />
// 								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
// 								<br />
// 								<strong>Velocidade: </strong> {hero.powerstats.speed}
// 								<br />
// 								<strong>Resistência: </strong> {hero.powerstats.durability}
// 								<br />
// 								<strong>Poder: </strong> {hero.powerstats.power}
// 								<br />
// 								<strong>Combate: </strong> {hero.powerstats.combat}
// 							</Description>
// 						</Box>
// 					</Card>
// 				</DetailsGrid>
// 				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
// 					<Box>
// 						<Button ghost onClick={handleBack}>
// 							Voltar
// 						</Button>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		)
// 	);
// }


// ===== Implementação de Armazenamento e Exibição de Avaliação no localStorage com Formik


import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../shared/DesignTokens';
import {
	SelectField,
	Option,
} from '../common-components/SelectField/SelectField';
import { Button } from '../common-components/Button/Button';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
import { Description } from '../common-components/Description/Description';
import { Card } from '../common-components/Card/Card';
import { Caption } from '../common-components/Caption/Caption';
import { useNavigate, useParams } from 'react-router-dom';
import { useHero } from '../hooks/useHero';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Alert } from '../common-components/Alert/Alert';

const Container = styled.aside`
	width: 727px;
	margin: 0 auto;
`;

const HeroAvatar = styled.div`
	width: 344px;
	height: 194px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center 25%;
`;

const DetailsGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: ${Spaces.TWO};
`;

export function Details() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { hero, isLoadingHero, setHeroAvaliation, getHeroAvaliation } = useHero(id); // Adicionadas as funções setHeroAvaliation e getHeroAvaliation do hook useHero

	const formik = useFormik({
		initialValues: getHeroAvaliation(id) || { avaliation: '' }, // Usando getHeroAvaliation para definir valores iniciais
		validationSchema: yup.object().shape({
			avaliation: yup.string().required(),
		}),
		onSubmit: (values) => {
			const heroAvaliation = { id, avaliation: values.avaliation };
			setHeroAvaliation(heroAvaliation); // Armazena a avaliação no localStorage
			alert('Nota atribuída com sucesso!');
			navigate('/'); // Redireciona para a tela de listagem
		},
	});

	const handleBack = () => {
		navigate(-1);
	};

	return (
		!isLoadingHero && (
			<Container>
				<Flex mt={Spaces.FOUR} as="section">
					<HeroAvatar src={hero.image.url} />
					<Flex flexDirection="column" justifyContent="center" height={194} ml={Spaces.SEVEN}>
						<form onSubmit={formik.handleSubmit} noValidate>
							<Flex>
								<SelectField
									name="avaliation"
									onChange={formik.handleChange}
									value={formik.values.avaliation}
									required
								>
									<Option value="" disabled>
										Selecione a nota
									</Option>
									<Option>5</Option>
									<Option>4</Option>
									<Option>3</Option>
									<Option>2</Option>
									<Option>1</Option>
								</SelectField>
								<Box ml={Spaces.THREE}>
									<Button type="submit">Atribuir</Button>
								</Box>
							</Flex>
							{formik.errors.avaliation && (
								<Box mt={Spaces.TWO}>
									<Alert type="error">
										Escolha uma nota para ser atribuída
									</Alert>
								</Box>
							)}
						</form>
					</Flex>
				</Flex>
				<Box my={Spaces.ONE_HALF} as="section">
					<HeadingTwo as="h1">{hero.name}</HeadingTwo>
					<Description color={Colors.GRAY_700}>
						{hero.biography['full-name']} - {hero.biography.publisher}
					</Description>
				</Box>
				<DetailsGrid>
					<Card>
						<Box p={Spaces.TWO}>
							<Box mb={Spaces.ONE}>
								<Caption>Codinomes</Caption>
							</Box>
							<Description color={Colors.GRAY_700}>
								{hero.biography.aliases.join(', ')}
							</Description>
						</Box>
					</Card>
					<Card>
						<Box p={Spaces.TWO}>
							<Box mb={Spaces.ONE}>
								<Caption>Local de Nascimento</Caption>
							</Box>
							<Description color={Colors.GRAY_700}>
								{hero.biography['place-of-birth']}
							</Description>
						</Box>
					</Card>
					<Card>
						<Box p={Spaces.TWO}>
							<Box mb={Spaces.ONE}>
								<Caption>Primeira HQ</Caption>
							</Box>
							<Description color={Colors.GRAY_700}>
								{hero.biography['first-appearance']}
							</Description>
						</Box>
					</Card>
					<Card>
						<Box p={Spaces.TWO}>
							<Box mb={Spaces.ONE}>
								<Caption>Informações Biológicas</Caption>
							</Box>
							<Description color={Colors.GRAY_700}>
								<strong>Genero: </strong> {hero.appearance.gender}
								<br />
								<strong>Raça: </strong> {hero.appearance.race}
								<br />
								<strong>Altura: </strong> {hero.appearance.height[1]}
								<br />
								<strong>Peso: </strong> {hero.appearance.weight[1]}
								<br />
								<strong>Cor do olho: </strong> {hero.appearance['eye-color']}
								<br />
								<strong>Cor do cabelo: </strong> {hero.appearance['hair-color']}
							</Description>
						</Box>
					</Card>
					<Card>
						<Box p={Spaces.TWO}>
							<Box mb={Spaces.ONE}>
								<Caption>Atributos</Caption>
							</Box>
							<Description color={Colors.GRAY_700}>
								<strong>Força: </strong> {hero.powerstats.strength}
								<br />
								<strong>Inteligência: </strong> {hero.powerstats.intelligence}
								<br />
								<strong>Velocidade: </strong> {hero.powerstats.speed}
								<br />
								<strong>Resistência: </strong> {hero.powerstats.durability}
								<br />
								<strong>Poder: </strong> {hero.powerstats.power}
								<br />
								<strong>Combate: </strong> {hero.powerstats.combat}
							</Description>
						</Box>
					</Card>
				</DetailsGrid>
				<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
					<Box>
						<Button ghost onClick={handleBack}>
							Voltar
						</Button>
					</Box>
				</Flex>
			</Container>
		)
	);
}
