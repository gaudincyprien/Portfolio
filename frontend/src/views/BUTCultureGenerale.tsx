import { Flex, Box, Text, Button, List, ListItem} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function BUTCultureGenerale() {

    return (
<Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me">
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
                    <Text>Lors de mon collègue j'avais appris les différentes égions et épartements de France, malheuresement avec le manque de pratique j'avais perdu la notion de certaines, de plus le nombre de région ayant diminué j'avais appris les anciences régions j'ai donc décider de me mettre à jour </Text>
                    <Text>J'ai décider de revoir les régions et départements de France afin de pouvoir les replacer sur une carte et de pouvoir visualiser plus facilement les lieux lors de discussion</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Les pays d'Europe et du Monde</Text>
                    <Text>Lors de mon collègue j'avais appris tous les pays d'Europe et je savais les placer sur une carte mais malheursement je ne savais plus les placer sur une carte pour certain pays d'Europe j'ai donc décider de les réviser afin de savoir où se trouve un pays pour pouvoir y partir en vacances</Text>
                    <Text>J'ai ensuite décider de continuer avec les principaux pays du monde pour pouvoir visualiser lors des discussions où se trouvent les pays et y connaître un peu leur climat, voisin, problème qi'il peut y avoir</Text>
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
                    <Text>Les règles de grammaire ont été aprises au collègue mais lors de mon lycée je ne faisant pas d'effort sur la grammaire et j'ai donc oublier certaines de ses règles, ce qui pose un problème au moment d'écrire des lettres de motivation sans fautes. J'ai donc décider de revoir celle pour lesquelles j'avais oubliet et cela permet de gagner du temps lors de l'écriture et de ne pas repasser dessus après au moment de d'appendre sa leçon</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Les règles d'orthographe</Text>
                    <Text>Les règles d'orthographe sont des règles que j'ai appris au collège mais que j'ai oublier par la suite, je me suis donc mis à les réviser pour pouvoir écrire sans fautes et gagner du temps lors de l'écriture de document, ainsi que d'avoir des textes sans fautes d'orthographe ce qui est un éléement important</Text>
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
                    <Text>Au début de mon BUT, je ne pouvais pas voter donc je ne m'intéraissais pas plus que ça à la politique, cependant la première ou j'ai pu voter est vite arrivée après mes 18 ans. Etant donnée que je n'avais pas beaucoup d'information sur la politique et pour ne pas voter n'importe comment j'ai pris la déscisions de m'intérréser à la politique et de regarder le programme de chaque canditat avec attention pour ne pas voter n'importe comment et aussi afin d'avoir des discussions avec des sujets de conservations posssibles</Text>
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
                    <Text>Afin d'améliorer mes connaissance de culturé générale, je regarde tous les jours des émissions pour appredre de nouvelle choses ou réviser des choses que j'ai pu oublier afin d'enrichier mes connaisances</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Informations</Text>
                    <Text>Pour renforcer ma culture Génréale je lis des articles sur internet ou encore j'écoute sur la radio pour savoir ce qu'il se passe actuellement</Text>
                </Box>
                <Box  style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Jeux de socités</Text>
                    <Text>Je renforce aussi ma culture générale en jouant à des jeux de socités qui permettent d'apprendre des nouvelles connaisent en répondant à des question que ce soit historique, sportif, d'actualité</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
