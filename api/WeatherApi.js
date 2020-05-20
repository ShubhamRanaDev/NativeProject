import Axios from "axios";

export default Axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    headers: {
        Authorization:
            "Bearer d5f2506e7a55b0a90335036fd389c8c4",
    },
});
