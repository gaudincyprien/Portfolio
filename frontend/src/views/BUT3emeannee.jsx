import { Flex, Box, Text, Button} from '@chakra-ui/react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { Link } from 'react-router-dom';

export default function BUT3emeannee() {

    return (
        <Box style={{ backgroundColor: '#d3d3d3', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/me/IUT">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>3 eme année</Text>
                </Box>
            </Flex>
            <Button style={{ marginBottom: '10px'}}>Adapter des applications sur un ensemble de supports (embarqué,web, mobile, IoT…)</Button>
            <Flex justifyContent='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='orange'>Choisir et implémenter les architectures adaptées</Text>
                    <Text>Cette compétence m'a permis d'explorer les différentes architectures et de les appliquer efficacement dans mes projets. Grâce à mes cours au semestre 5 et 6, j'ai acquis une réflexion solide sur le choix des architectures appropriées en fonction des besoins du projet. Pendant mon alternance, j'ai pu mettre en pratique ces connaissances en participant à la création de nouveaux projets, ce qui m'a également amené à prendre des décisions sur le choix des langages de programmation. Bien que je sois à l'aise pour mettre en place une architecture qui répond aux besoins spécifiques du projet, je reconnais qu'il existe encore des améliorations à apporter et des concepts à approfondir, notamment en ce qui concerne les meilleures pratiques en entreprise.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Faire évoluer une application existante</Text>  
                    <Text>Au cours de mes études, j'ai appris à ajouter de nouvelles fonctionnalités à des applications existantes tout en maintenant leur fonctionnalité de base. Cela implique de travailler sur des applications déjà fonctionnelles mais dont le code n'a pas été initialement écrit par nous. Cette expérience m'a permis de comprendre l'importance de la compatibilité et de la cohérence dans le processus d'évolution d'une application.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color='green'>Intégrer des solutions dans un environnement de production</Text>
                    <Text>Cette compétence m'a appris à passer du développement en local à la mise en production dans un environnement professionnel. En entreprise, les applications ne fonctionnent pas seulement en local mais sont souvent déployées comme des services continus. Pour cela, j'ai acquis des compétences en utilisant des outils comme Docker, qui permettent de créer des conteneurs isolés pour exécuter des applications. J'ai également appris l'importance des tests avant le déploiement en production pour garantir le bon fonctionnement des programmes.</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Analyser et optimiser des applications</Button>
            <Flex justifyContent='center' >
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="orange">Anticiper les résultats de diverses métriques</Text>
                    <Text>Dans cette compétence, j'ai appris à anticiper les résultats de diverses métriques. Cela implique la capacité à prédire les performances, la disponibilité et d'autres aspects clés d'une application ou d'un système informatique en fonction des métriques pertinentes. Comprendre comment les changements affectent ces métriques est essentiel pour prendre des décisions éclairées en matière de développement et d'optimisation.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="green">Profiler, analyser et justifier le comportement d’un code existant</Text>
                    <Text>Cette partie de ma formation m'a aidé à comprendre comment étudier et expliquer le fonctionnement du code déjà existant. Cela signifie que j'ai appris à utiliser des outils spéciaux pour regarder de près le code et trouver ce qui le ralentit ou le rend moins efficace. En comprenant ces aspects du code, je peux expliquer de manière convaincante pourquoi des changements sont nécessaires, en utilisant des preuves concrètes et des analyses approfondies.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="green">Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application</Text>
                    <Text>Dans cette compétence, j'ai acquis la capacité à choisir et à utiliser des bibliothèques et des méthodes dédiées au domaine d'application spécifique. Cela implique une compréhension approfondie des besoins du projet ainsi que des technologies disponibles pour répondre à ces besoins de manière efficace et efficiente. En sélectionnant les bonnes bibliothèques et méthodes, je peux optimiser le développement de logiciels et garantir des résultats de haute qualité qui répondent aux exigences spécifiques du domaine d'application.</Text>
                </Box>
            </Flex>
            <Button style={{ marginTop: '40px', marginBottom: '10px' }}>Manager une équipe informatique</Button>
            <Flex justifyContent='center' >
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="green">Organiser et partager une veille technologique et informationnelle</Text>
                    <Text>Dans cette compétence, j'ai développé la capacité à rester à jour avec les avancées technologiques et les informations importantes dans le domaine. Cela implique d'être en mesure d'organiser et de partager efficacement ces connaissances au sein d'une équipe ou d'une organisation. En maintenant cette veille technologique et informationnelle, nous sommes mieux préparés à prendre des décisions éclairées et à rester compétitifs sur le marché en constante évolution.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="orange">Identifier les enjeux de l’économie de l’innovation numérique</Text>
                    <Text>Cette compétence m'a permis de comprendre les défis et les opportunités liés à l'économie de l'innovation numérique. Cela implique la capacité à identifier les tendances économiques et les implications de l'innovation technologique sur les marchés, les entreprises et la société dans son ensemble.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="orange">Guider la conduite du changement informatique au sein d’une organisation</Text>
                    <Text>Dans ce domaine, j'ai acquis la capacité à diriger et à faciliter les processus de changement dans le domaine de l'informatique au sein d'une organisation. Cela comprend la gestion des aspects humains, organisationnels et techniques du changement, en veillant à ce que les transitions se déroulent de manière efficace et que les objectifs stratégiques soient atteints.</Text>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="green">Accompagner le management de projet informatique</Text>
                    <Text>Cette compétence concerne le soutien apporté à la gestion des projets informatiques. Cela inclut la coordination des équipes, la gestion des ressources et des délais, ainsi que la communication avec les parties prenantes pour assurer le succès des projets.</Text>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
