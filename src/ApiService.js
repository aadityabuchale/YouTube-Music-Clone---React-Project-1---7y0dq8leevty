import axios from "axios";

const BASE_URL = "https://academics.newtonschool.co/api/v1/music/";
const PROJECT_ID = "7y0dq8leevty";

// get all songs
async function getSongsByCategory(endUrl) {
    try {
        const resut = await axios.get(BASE_URL + endUrl, {
            headers: {
                projectId: PROJECT_ID,
            },
        });
        return resut.data.data;
    } catch (err) {
        return console.error(err);
    }
}

export { getSongsByCategory };
