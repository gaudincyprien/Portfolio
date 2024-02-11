import axios, {AxiosResponse } from 'axios';

export async function get_raquettes(nb_joueurs : number) {
    try {
        const formData = new FormData();
        formData.append('nb_joueurs', nb_joueurs.toString());
    
        return await axios.post(
        "http://127.0.0.1:8000/tennis/afterwork/new_matchs",
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    ) as AxiosResponse<ConfigAPIRaquettes>;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}