"use client";
import React, { useEffect, useState } from "react";
import axios from "../api/mockApi";
import Button from "@/components/ui/Button";
import PostCard from "@/components/ui/PostCard";

type FlightClass = {
  class: "اکونومی" | "بیزنس" | "فرست کلاس"; // نوع کلاس پرواز به‌صورت محدود
  price: number; // قیمت کلاس
};

type Flight = {
  flight_id: number; // شناسه پرواز
  airline: string; // نام ایرلاین
  origin: string; // مبدا
  destination: string; // مقصد
  departure_times: string[]; // آرایه‌ای از زمان‌های حرکت
  arrival_times: string[]; // آرایه‌ای از زمان‌های رسیدن
  classes: FlightClass[]; // آرایه‌ای از کلاس‌های پرواز
};

type FlightsResponse = {
  flights: Flight[]; // آرایه‌ای از پروازها
};

const FlightsPage = () => {
  const [flights, setFlights] = useState<Flight[]>([]); // استفاده از تایپ Flight
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<FlightsResponse>("/flights") // مشخص کردن نوع پاسخ
      .then((response) => {
        setFlights(response.data.flights); // مقداردهی به flights
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div>
      <h1>لیست پروازها</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.flight_id}>
            <strong>{flight.airline}</strong> از {flight.origin} به{" "}
            {flight.destination}
          </li>
        ))}
      </ul>
      <PostCard>
        <div className="flex flex-col">
          <h2>اطلاعات پرواز</h2>
          <Button>Refresh</Button>
        </div>
      </PostCard>
    </div>
  );
};

export default FlightsPage;
