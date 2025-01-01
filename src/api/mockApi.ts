import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

// Import فایل‌های JSON
import flights from "@/data/flights.json";
import trains from "@/data/trains.json";

const axiosInstance = axios.create();
const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 500 });

mock.onGet("/flights").reply(200, flights);
mock.onGet("/trains").reply(200, trains);

export default axiosInstance;
