import { Flex, Box, Text} from '@chakra-ui/react';
import Navbar from '../../components/partial/NavBar';
import Footbar from '../../components/partial/FootPage';
import BoxTitle from '../../components/belote/BoxTitle';

export default function HomePage() {

    return (
        <Box style={{ backgroundColor: '#00ff00', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                <Text>Règles du jeu</Text>
            </Box>
            <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                <Flex style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text>La belote est un jeu de cartes qui se joue à 4 joueurs répartis en deux équipes de deux. Les partenaires sont assis en face l'un de l'autre. Le jeu de belote se joue avec un jeu de 32 cartes. Les cartes sont classées de l'as au 7, puis du roi à la dame. L'ordre des cartes est le suivant : as, roi, dame, valet, 10, 9, 8, 7.</Text>
                    <Text>Le but du jeu est de remporter un maximum de points en remportant des plis. Le jeu se joue en plusieurs
                        manches. Une manche est terminée lorsqu'une des équipes atteint 1000 points. L'équipe qui atteint 1000 points remporte la partie.</Text>
                    <Text>La belote se joue en plusieurs étapes : la distribution des cartes, l'annonce, le jeu des plis et le décompte des points.</Text>
                    <Text>La distribution des cartes : le donneur distribue 3 cartes à chaque joueur, puis 2 cartes. Chaque joueur reçoit donc 5 cartes. Le donneur retourne ensuite la carte du dessus du talon. Cette carte détermine l'atout.</Text>
                    <Text>L'annonce : après la distribution des cartes, chaque joueur peut faire une annonce. Les annonces possibles sont les suivantes : belote, rebelote, capot, coinche, surcoinche. Les annonces belote et rebelote permettent de remporter des points supplémentaires. L'annonce capot permet
                        de remporter la totalité des points de la manche. Les annonces coinche et surcoinche permettent de doubler ou de quadrupler les points de la manche.</Text>
                    <Text>Le jeu des plis : le joueur à la gauche du donneur commence la manche. Il joue une carte de son choix. Les autres joueurs doivent jouer une carte de la même couleur si possible. Si un joueur ne peut pas jouer une carte de la même couleur, il peut jouer une carte de l'atout. Le joueur qui remporte le pli joue le pli suivant.</Text>
                    <Text>Le décompte des points : à la fin de la manche, les points sont comptabilisés. Les points sont attribués en fonction des cartes remportées et des annonces faites. Les points sont attribués de la manière suivante : 10 points pour l'as, 4 points pour le roi, 3 points pour la dame, 2 points pour le valet, 11 points pour le 10, 0 point pour le 9, 0 point pour le 8, 0 point pour le 7. Les points des plis remportés sont ajoutés aux points des annonces.</Text>
                </Flex>
            </Box>
            <Footbar />
        </Box>
    );
}
