import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flex, Text, Box, Input, Checkbox } from "@chakra-ui/react";
import Navbar from '../../components/partial/NavBar';
import Footbar from '../../components/partial/FootPage';
import BoxTitle from '../../components/belote/BoxTitle';
import NameConfiguration from "../../components/belote/NameConfiguration";
import TeamConfiguration from "../../components/belote/TeamConfiguration";

export default function ConfigurationPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const players = searchParams.get("players");

    useEffect(() => {
        console.log("Nombre de joueurs :", players);
    }, [players]);

    const [points, setPoints] = useState('');

    const handlePointsChange = (event) => {
        setPoints(event.target.value);
    };

    const handleButtonClick = async () => {
        if (!points.trim()) {
            alert('Veuillez saisir le nombre de points.');
            //window.location.href = `/belote/configuration?players=${players}`;
        }
        else {
            window.location.href = `/`;
        }
    };

    return (
        <Box style={{ backgroundColor: '#00ff00', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <BoxTitle />
          <Flex flexDirection='column' justifyContent='center' alignItems='center' flex={1}>
            {players === '3' ? (
                <Flex justifyContent='center' alignItems='center'>
                    <NameConfiguration />
                    <NameConfiguration />
                    <NameConfiguration />
                </Flex>
            ) : (
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
                    <Checkbox defaultChecked marginTop="10px" >Annonces</Checkbox>
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
