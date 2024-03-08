import { Flex, Box, Text, Button, List, ListItem} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function BUT1ereannee() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me/IUT">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>1 ere année</Text>
                </Box>
            </Flex>
            <Button style={{ marginBottom: '10px'}}>Développer des applications informatiques simples</Button>
            <Flex justifyContent='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Implémenter des conceptions simples</Text>
                    <Text>Afin d'élaborer des concepts simples en informatique, nous avons commencer à faires des petits programmes basic qui permttent de calculer le périmètres d'un carré par exemple en pseudo-code pour commencer avant de l'implémenter en Java après. Cela m'a permis de prendre connaissance du Java et aussi de l'importance même pour les petits bouts de code qui sont à faire.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Élaborer des conceptions simples</Text>
                    <Text>Nous avons utiliser des concepts simple avec les piles et files en Java. Nous avons commencer par utilsier les piles et files définis par les classe Java puis nous avons coder nous même notre classe pile et file afin d'élaborer un concept assez simple qui peut être utilsés dans d'autre projets.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Faire des essais et évaluer leurs résultats en regard des spécifications</Text>
                    <Text>Après avoir fait la solution techniques pour répondre aux spécification, il faut s'assurer que la solution proposés répond bien au besoin de l'exigence, pour cela on fait des tests avec plusieurs valeurs notament avec des valeurs pouvant faire planter le programme.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Développer des interfaces utilisateurs</Text>
                    <Text>Nous avons appris à utiliser le HTML et CSS afin de pouvoir faire des pages web pour les utilisateurs. Le but était de reproduire au maximun une page web déjà existante comme si cette page était une maquette afin de nous former à refaire des pages sans qu'on puisse le faire comme on le souhaite</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projets</Text>
                    <Text>- Le premier projet en équipe de 4 était de faire une histoire avec un robot. Le robot devait raconter une histoire au cours de sa balade. Avec mon groupe on avait décider de faire le passage de permis. Nous avons donc coder en Java pour que le robot suive une ligne noir qui étais la route et passe différente étape du permis (stop, rond point, parking).</Text>
                    <Text>- Le deuxième projet en équipe de 3 était de dévolpper une application de gestion des étudiants pour le département informatique, c'est à dire gérer les étudiants pour la secrétaire avec les groupes, gérer les absences pour le directeur d'études et pour les étudiant pouvoir voir le trombinoscope de sa promo. Ce projet a été réalisé en JavaFX.</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Appréhender et construire des algorithmes</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Formaliser et mettre en œuvre des outils mathématiques pour l’informatique</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projets</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Installer et configurer un poste de travail</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Identifier les différents composants (matériels et logiciels) d’un système numérique</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Installer et configurer un système d’exploitation et des outils de développement</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Configurer un poste de travail dans un réseau d’entreprise</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projets</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Concevoir et mettre en place une base de données à partir d’un cahier des charges client</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Visualiser des données</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Concevoir une base de données relationnelle à partir d’un cahier des charges</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projets</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Identifier les besoins métiers des clients et des utilisateurs</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Appréhender les besoins du client et de l'utilisateur</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Mettre en place les outils de gestion de projet</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Identifier les acteurs et les différentes phases d’un cycle de développement</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projets</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Identifier ses aptitudes pour travailler dans une équipe</Button>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Appréhender l’écosystème numérique</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Découvrir les aptitudes requises selon les différents secteurs informatiques</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Acquérir les compétences interpersonnelles pour travailler en équipe</Text>
                    <Text>...</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold">Projets</Text>
                    <Text>...</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
