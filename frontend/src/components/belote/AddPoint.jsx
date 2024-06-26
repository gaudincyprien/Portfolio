import React, { useEffect, useState } from 'react';
import { Flex, Box, Text, Button, Select, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../partial/NavBar';
import Footbar from '../partial/FootPage';
import BoxTitle from './BoxTitle';
import axios from 'axios';

export default function AddPoints() {
    const [ListPayers, setListPayers] = useState([]); 
    const [playerSelected, setPlayerSelected] = useState("");
    const ListAtout = ["coeur", "carreau", "pique", "trefle"];
    const [atoutSelected, setAtoutSelected] = useState("");
    const [annonce, setAnnonce] = useState(false);
    const [points, setPoints] = useState(Array(ListPayers.length).fill("")); // Initialiser avec des chaînes vides pour chaque joueur

    useEffect(() => {
        const fetchNumberOfPlayer = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/belote/infos",
                    { headers: { 'Content-Type': 'application/json' } }
                );
                const players = await response.data.players;
                const annonce = await response.data.annonce;
                setListPayers(players);
                setAnnonce(annonce);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNumberOfPlayer();
    }, []);

    const handlePlayerSelected = (event) => {
        setPlayerSelected(event.target.value);
    };

    const handleAtoutSelected = (event) => {
        setAtoutSelected(event.target.value);
    };

    const handlePointsChange = (event, index) => {
        const newPoints = [...points];
        newPoints[index] = event.target.value;
        setPoints(newPoints);
    };

    const handleButtonClick = () => {
        console.log(playerSelected);
        console.log(atoutSelected);
        console.log(points);
    }

    return (
        <Box style={{ backgroundColor: '#00ff00', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Link to="/belote/Game">
                <Button style={{ position: 'absolute', top: 10, left: 10 }}>Back</Button>
            </Link>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginRight: '10px' }}>
                    <Text>Sélectionner le joueur qui a pris : </Text>
                    <Select
                        value={playerSelected}
                        onChange={handlePlayerSelected}
                        placeholder=""
                        marginTop={5}
                    >
                        {ListPayers.map((player, index) => (
                            <option key={index} value={index + 1}>{player}</option>
                        ))}
                    </Select>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginLeft: '10px' }}>
                    <Text>Sélectionner l'atout : </Text>
                    <Select
                        value={atoutSelected}
                        onChange={handleAtoutSelected}
                        placeholder=""
                        marginTop={5}
                    >
                        {ListAtout.map((atout, index) => (
                            <option key={index} value={index + 1}>{atout}</option>
                        ))}
                    </Select>
                </Box>
            </Flex>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '10px' }}>
                    <Text textAlign='center'>Tableau</Text>
                    <Flex flexDirection='column'>
                        {ListPayers.map((player, index) => (
                            <Flex key={index} alignItems='center' marginBottom='10px'>
                                <Text marginRight='10px'>{player}</Text>
                                {annonce && (
                                    <Input
                                        type="text"
                                        placeholder={`Annonce de ${player}`}
                                        marginRight='10px'
                                    />
                                )}
                                <Input
                                    type="text"
                                    placeholder={`Points de ${player}`}
                                    value={points[index]}
                                    onChange={(event) => handlePointsChange(event, index)}
                                />
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Flex>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link>
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500" onClick={handleButtonClick}>Valider</Text>
                    </Link>
                </Box>
            </Flex>
            <BoxTitle />
            <Footbar />
        </Box>
    );
}
