import axios, { AxiosResponse } from 'axios';

export async function get_raquettes(nb_joueurs: number, terrain: string[]) {
    try {
        const data = {
            nb_joueurs: nb_joueurs,
            terrain: terrain
        };
    
        return await axios.post(
            "https://cypriengaudin.fr/tennis/afterwork/new_matchs",
            data,
            { headers: { 'Content-Type': 'application/json' } }
        ) as AxiosResponse<ConfigAPIRaquettes>;
    } catch (e) {
        console.error(e);
        throw e;
    }
}
