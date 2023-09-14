import axios from "axios";

function getAllSongs() {
    return axios
        .get("https://academics.newtonschool.co/api/v1/music/song", {
            headers: {
                projectId: "7y0dq8leevty",
            },
        })
        .then((resut) => {
            return resut.data.data;
        });
}

export { getAllSongs };
