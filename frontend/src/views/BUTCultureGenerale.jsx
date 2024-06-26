import { Flex, Box, Text, Button, List, ListItem} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function BUTCultureGenerale() {

    return (
<Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me/IUT">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#a3a3a3', padding: '20px', borderRadius: '8px' }}>
                    <Text>Culture Générale</Text>
                </Box>
            </Flex>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Révision Géographiques</Text>
                </Box>
            </Flex>
            <Flex padding={5} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Les départements et région de France</Text>
                    <Text>Lors de mon collège, j'avais appris les différentes régions et départements de France. Malheureusement, avec le manque de pratique, j'avais perdu la notion de certaines. De plus, le nombre de régions ayant diminué, j'avais appris les anciennes régions. J'ai donc décidé de me mettre à jour.</Text>
                    <Text>J'ai décidé de revoir les régions et départements de France afin de pouvoir les replacer sur une carte et de pouvoir visualiser plus facilement les lieux lors de discussions.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Les pays d'Europe et du Monde</Text>
                    <Text>Lors de mon collège, j'avais appris tous les pays d'Europe et je savais les placer sur une carte. Malheureusement, je ne me souvenais plus de l'emplacement de certains pays d'Europe. J'ai donc décidé de les réviser afin de savoir où se trouve un pays pour pouvoir y partir en vacances.</Text>
                    <Text>Ensuite, j'ai décidé de continuer avec les principaux pays du monde pour pouvoir visualiser lors des discussions où se trouvent les pays et en connaître un peu plus sur leur climat, leurs voisins, et les problèmes qu'ils peuvent rencontrer.</Text>
                </Box>
            </Flex>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Révision de Français</Text>
                </Box>
            </Flex>
            <Flex padding={5} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Règles de grammaire</Text>
                    <Text>Les règles de grammaire ont été apprises au collège, mais lors de mon lycée, je ne faisais pas d'efforts sur la grammaire et j'ai donc oublié certaines de ces règles, ce qui pose problème au moment d'écrire des lettres de motivation sans fautes. J'ai donc décidé de revoir celles que j'avais oubliées. Cela permet de gagner du temps lors de l'écriture et de ne pas avoir à revenir dessus après avoir appris ma leçon.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Les règles d'orthographe</Text>
                    <Text>Les règles d'orthographe sont des règles que j'ai apprises au collège mais que j'ai oubliées par la suite. Je me suis donc mis à les réviser pour pouvoir écrire sans fautes et gagner du temps lors de la rédaction de documents. Avoir des textes sans fautes d'orthographe est un élément important.</Text>
                </Box>
            </Flex>
            <Flex flex={2} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Apprentissage de la Politique</Text>
                </Box>
            </Flex>
            <Flex padding={5} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Election présidentielle</Text>
                    <Text>Au début de mon BUT, je ne pouvais pas voter, donc je ne m'intéressais pas beaucoup à la politique. Cependant, la première élection où j'ai pu voter est vite arrivée après mes 18 ans. Étant donné que je n'avais pas beaucoup d'informations sur la politique et pour éviter de voter n'importe comment, j'ai pris la décision de m'intéresser à la politique. J'ai donc examiné attentivement le programme de chaque candidat afin de voter de manière éclairée et aussi pour pouvoir avoir des discussions sur des sujets de conversation intéressants.</Text>
                </Box>
            </Flex>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Révision/Apprentissage Culture Générale</Text>
                </Box>
            </Flex>
            <Flex padding={5} justifyContent='center' >
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Emission</Text>
                    <Text>Afin d'améliorer mes connaissances en culture générale, je regarde tous les jours des émissions pour apprendre de nouvelles choses ou réviser celles que j'ai pu oublier. Cela me permet d'enrichir mes connaissances.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Informations</Text>
                    <Text>Pour renforcer ma culture générale, je lis des articles sur internet et j'écoute également la radio pour me tenir au courant de l'actualité. Cela me permet de savoir ce qu'il se passe actuellement.</Text>
                </Box>
                <Box  style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Jeux de socités</Text>
                    <Text>Je renforce également ma culture générale en jouant à des jeux de société qui permettent d'apprendre de nouvelles connaissances en répondant à des questions, que ce soit sur l'histoire, le sport, ou l'actualité.</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
