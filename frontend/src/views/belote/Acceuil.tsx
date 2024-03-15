import React, { useState } from "react";
import { Box, Flex, Text, Select } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Navbar from '../../components/partial/NavBar';
import Footbar from '../../components/partial/FootPage';
import BoxTitle from '../../components/belote/BoxTitle';

export default function HomePage() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = async () => {
        if (selectedOption === '3' || selectedOption === '4') {
            //aller sur la page de configuration
            handleFileUpload()
            //window.location.href = `/belote/configuration`;
        }
        else {
            alert('Nombre de joueurs incorrect. Veuillez saisir 2 ou 4 joueurs.');
        }
    }

    const handleFileUpload = async () => {
      const formData = new FormData();
      formData.append('nbPlayers', '3');
  
      await fetch('http://localhost:8000/nbplayers', {
        method: 'POST',
        body: formData,
      })}

    return (
        <Box style={{ backgroundColor: '#00ff00', height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <BoxTitle />
          <Flex flex={1} justifyContent='center' alignItems='center'>
            <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
              <Text>Nombre de joueurs :</Text>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder="Sélectionner le nombre de joueurs"
                marginTop={5}
              >
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </Box>
          </Flex>
          <Flex flex={1} justifyContent='center' alignItems='center'>
            <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                <Link>
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500" onClick={handleButtonClick}>Valider</Text>
                </Link>
            </Box>
            <Box style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', margin: '0 10px' }}>
                <Link to="/belote/regles">
                    <Text as="h2" fontSize="lg" fontWeight="bold" color="blue.500">Regles</Text>
                </Link>
            </Box>
            </Flex>
          <Footbar />
        </Box>
    );
}
