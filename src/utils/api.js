// Importa la biblioteca Axios
import axios from 'axios';

// URL de la API de WordPress
const apiUrl = 'https://turismovillaunion.gob.ar/wp-json/wp/v2';

// Variable global para almacenar los datos devueltos por la API
let postsData;

// Función asincrónica para obtener los últimos 4 posts de la API de WordPress
export async function getLatestPosts() {
    try {
        const response = await axios.get(`${apiUrl}/posts?_embed&per_page=4`);

        // Guarda los datos devueltos por la API en la variable global postsData
        postsData = response.data;

    } catch (error) {
        // Maneja el error
        console.error(error);
    }
    return postsData;
}

export async function getAllPosts() {
    try {
        const response = await axios.get(`${apiUrl}/posts?per_page=5&offset=0`);

        // Guarda los datos devueltos por la API en la variable global postsData
        postsData = response.data;

    } catch (error) {
        // Maneja el error
        console.error(error);
    }
    return postsData;
}

export async function getOnePost(id) {
    try {
        const response = await axios.get(`${apiUrl}/posts/${id}`);

        // Guarda los datos devueltos por la API en la variable global postsData
        postsData = response.data;

    } catch (error) {
        // Maneja el error
        console.error(error);
    }
    return postsData;
}


