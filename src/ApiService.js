import axios from "axios";

const BASE_URL = "https://academics.newtonschool.co/api/v1/music/";
const PROJECT_ID = "7y0dq8leevty";

// get all songs
async function getSongsByCategory(endUrl) {
    try {
        const result = await axios.get(BASE_URL + endUrl, {
            headers: {
                projectId: PROJECT_ID,
            },
        });
        return result.data.data;
    } catch (err) {
        return console.log(err);
    }
}

async function getMusic(id) {
    try {
        const result = await axios.get(BASE_URL + "song/" + id, {
            headers: {
                projectId: PROJECT_ID,
            },
        });

        return result.data.data;
    } catch (err) {
        console.log(err);
    }
}

export { getSongsByCategory, getMusic };
