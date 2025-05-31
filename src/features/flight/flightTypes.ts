export interface Flight {
  flight_id: number;
  airline: string;
  origin: string;
  destination: string;
  departure_time: string[];
  arrival_times: string[];
}

export interface FlightClass {
  class: string;
  price: number;
}
