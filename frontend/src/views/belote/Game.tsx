import React, { useState, useEffect } from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Navbar from '../../components/partial/NavBar';
import Footbar from '../../components/partial/FootPage';
import BoxTitle from '../../components/belote/BoxTitle';
import axios from 'axios';

export default function GamePage() {
    const [teams, setTeams] = useState([]);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const fetchGameConfiguration = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/belote/configuration",
                    { headers: { 'Content-Type': 'application/json' } }
                );
                console.log(response.data);
                setTeams(response.data.teams);
                setPoints(response.data.points);
            } catch (error) {
                console.error(error);
            }
        };
        fetchGameConfiguration();
    }, []);

    function AddPointClick(event: MouseEvent<HTMLParagraphElement, MouseEvent>): void {
        window.location.href = `/belote/addpoint`;
    }

    function DashbaordClick(event: MouseEvent<HTMLParagraphElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Box style={{ backgroundColor: '#00ff00', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <BoxTitle />
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                    <Text>Nombre de points : {points}</Text>
                </Box>
            </Flex>
            <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
                {teams.map((team, index) => (
                    <Flex key={index} justifyContent='center' alignItems='center' style={{ margin: '20px' }}>
                        <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
                            <Text>Equipe : {team.name}</Text>
                            <Text>{team.score}</Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
            <Flex justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link>
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500" onClick={AddPointClick}>Ajouter Point</Text>
                    </Link>
                </Box>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                    <Link>
                        <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500" onClick={DashbaordClick}>Dashboard</Text>
                    </Link>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
