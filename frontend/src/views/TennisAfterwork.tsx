import React, { useState } from 'react';
import Navbar from '../components/partial/NavBar';
import Footbar from '../components/partial/FootPage';
import { CheckboxGroup, Stack, Checkbox, Button, Flex, Input, Table, Thead, Tr, Th, Tbody, Td, TableContainer, Box, Text } from '@chakra-ui/react';
import { get_raquettes } from '../api/config';

export default function TennisAfterwork() {
    const [players, setPlayers] = useState(["", "", "", ""]);
    const [terrainDispo, setTerrainDispo] = useState(['simple', 'mini-tennis']);
    const [raquettesData, setRaquettesData] = useState([]);
    const [typeDeBalle, setTypeDeBalle] = useState('');
    const [terrain, setTerrain] = useState('');

    const handleCheckboxChange = (values) => {
        setTerrainDispo(values);
    };

    const handleButtonClick = async () => {
        console.log(players);
        if (terrainDispo.length == 0) {
            alert('Aucun terrain de dispo.');
        } else if (players[0] != "" && players[1] != "" && players[2] == "" && players[3] == ""){
            const data = (await get_raquettes(2, terrainDispo)).data;
            setRaquettesData(data.raquettes);
            setTypeDeBalle(data.balle);
            setTerrain(data.terrain + "/" + data.simple_double);
        } else if (players[0] != "" && players[1] != "" && players[2] != "" && players[3] != "") {
            const data = (await get_raquettes(4, terrainDispo)).data;
            setRaquettesData(data.raquettes);
            setTypeDeBalle(data.balle);
            setTerrain(data.terrain + "/" + data.simple_double);
        }
        else {
                alert('Nombre de joueurs incorrect. Veuillez saisir 2 ou 4 joueurs.');
        }
    };

    return (
        <Box style={{ backgroundColor: '#00ff00', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
                <CheckboxGroup colorScheme='green' defaultValue={['simple', 'mini-tennis']} onChange={handleCheckboxChange}>
                  <Stack direction='column'>
                    <Checkbox value='simple'>Terrain de simple</Checkbox>
                    <Checkbox value='mini-tennis'>Terrain de mini-tennis</Checkbox>
                  </Stack>
                </CheckboxGroup>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Joueur</Th>
                                    <Th>Raquettes</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {[1, 2, 3, 4].map((index) => (
                                    <Tr key={index}>
                                        <Input
                                            id={'input' + index}
                                            type='text'
                                            placeholder={'Joueur ' + index}
                                            onChange={(e) => {
                                                const updatedPlayers = [...players];
                                                updatedPlayers[index - 1] = e.target.value;
                                                setPlayers(updatedPlayers);
                                            }}
                                        />
                                        <Td id={'raquette' + index}>{raquettesData[index - 1]}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Box textAlign="left" mb="4">
                        <Text>Type de balle à utiliser: {typeDeBalle}</Text>
                        <Text>Terrain à utiliser: {terrain}</Text>
                    </Box>
                    <Button colorScheme='blue' onClick={handleButtonClick}>Nouveau Match</Button>
                </Box>
            </Flex>
            <Footbar />
        </Box>
    );
}
