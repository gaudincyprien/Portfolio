import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flex, Text, Box, Input, Checkbox } from "@chakra-ui/react";
import Navbar from '../../components/partial/NavBar';
import Footbar from '../../components/partial/FootPage';
import BoxTitle from '../../components/belote/BoxTitle';
import NameConfiguration from "../../components/belote/NameConfiguration";
import TeamConfiguration from "../../components/belote/TeamConfiguration";
import axios from "axios"; // Ajout de l'import pour axios

export default function ConfigurationPage() {
    const [players, setPlayers] = useState(''); // Initialisation avec une valeur par défaut
    const [points, setPoints] = useState('');
    const [display, isDisplay] = useState('');
    const [isAnnouncementChecked, setIsAnnouncementChecked] = useState(true);

    useEffect(() => {
        const fetchNumberOfPlayer = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/belote/nbplayers",
                    { headers: { 'Content-Type': 'application/json' } }
                );
                const number = await response.data.nb_joueurs;
                setPlayers(number);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNumberOfPlayer();
    }, []);

    useEffect(() => {
        players === '3' ? isDisplay('name') : isDisplay('team');
    },[players])

    const handlePointsChange = (event) => {
        setPoints(event.target.value);
    };

    const handleAnnouncementChange = () => {
        setIsAnnouncementChecked(!isAnnouncementChecked);
    };

    const handleButtonClick = async () => {
        if (!points.trim()) {
            alert('Veuillez saisir le nombre de points.');
        }
        let isCorrect = true;
        const inputs_team = document.querySelectorAll('input[id^="equipe"]');
        if (players === '4' && (inputs_team[0].value === '' || inputs_team[1].value === '')) {
            alert("Le nom d'équipe est obligatoire.")
            isCorrect = false;
        }
        if (players === '4' && (inputs_team[0].value === inputs_team[1].value)){
            alert("Les noms d'équipes doivent être différents.")
            isCorrect = false;
        }
        const inputs_name = document.querySelectorAll('input[id^="name"]');
        for (const input of inputs_name) {
            if (input.value.trim() === '') {
                alert("Le nom de joueur est obligatoire.");
                isCorrect = false;
                break; // Sortir de la boucle dès qu'un input vide est trouvé
            }
        }

        if (isCorrect){
            await configuration(inputs_team, inputs_name)
            window.location.href = `/belote/game`;
        }
    }

    const configuration = async (inputs_team, inputs_name) => {
        try {
            let data;
            if (players === '3') {
                data = {
                    annonce: isAnnouncementChecked,
                    points: points,
                    inputs_team: [],
                    inputs_name: [inputs_name[0].value, inputs_name[1].value, inputs_name[2].value]
                };
            }
            else {
                data = {
                    annonce: isAnnouncementChecked,
                    points: points,
                    inputs_team: [inputs_team[0].value, inputs_team[1].value],
                    inputs_name: [inputs_name[0].value, inputs_name[1].value, inputs_name[2].value, inputs_name[3].value]
                };
            }
            await axios.post(
                "http://localhost:8000/belote/configuration",
                data,
                { headers: { 'Content-Type': 'application/json' } }
            );
        } catch (e) {
            console.error(e);
            throw e;
        }
    };

    return (
        <Box style={{ backgroundColor: '#00ff00', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <BoxTitle />
            <Flex flexDirection='column' justifyContent='center' alignItems='center' flex={1}>
                {display === 'name' && (
                    <Flex justifyContent='center' alignItems='center'>
                        <NameConfiguration />
                        <NameConfiguration />
                        <NameConfiguration />
                    </Flex>
                )}
                {display === 'team' && (
                    <Flex justifyContent='center' alignItems='center'>
                        <TeamConfiguration />
                        <TeamConfiguration />
                    </Flex>
                )}
                <Flex justifyContent='center' alignItems='center' marginTop='20px'>
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Flex alignItems='center'>
                            <Text marginRight="10px" flexShrink={0}>Nombre de points : </Text>
                            <Input type="number" placeholder="Nombre de points" value={points} onChange={handlePointsChange} />
                        </Flex>
                        <Checkbox
                            defaultChecked={isAnnouncementChecked}
                            onChange={handleAnnouncementChange}
                            marginTop="10px"
                        >
                            Annonces
                        </Checkbox>
                    </Box>
                </Flex>
                <Flex justifyContent='center' marginTop='20px'>
                    <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                        <Link>
                            <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500" onClick={handleButtonClick}>Valider</Text>
                        </Link>
                    </Box>
                </Flex>
            </Flex>
            <Footbar />
        </Box>
    );
}
