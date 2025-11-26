'use client'

import DestinationsSection from "@/components/home/DestinationSection/DestinationsSection";
import HeroDeals from "@/components/home/HeroDeals/HeroDeals";
import ReasonSection from "@/components/home/ReasonsSection/ReasonSection";
import SmallgroupSection from "@/components/SmallGroupSection";
import api from "@/lib/apiClient";
import { DealResponse } from "@/lib/interfaces/deal.interface";
import { DestinationResponse } from "@/lib/interfaces/destination.interface";
import axios from "axios";
import { useEffect, useState } from "react";

interface HomeData {
  deals: DealResponse;
  destinations: DestinationResponse;
}


export default function Home() {

  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [dealsRes, destinationsRes] = await Promise.all([
          api.get("/deals"),
          api.get("/destinations"),
        ]);

        setData({
          deals: dealsRes.data,
          destinations: destinationsRes.data,
        });
      } catch (err) {
        console.error("Home API error:", err);

        if (axios.isAxiosError(err)) {
          const status = err.response?.status;
          const msg = err.response?.data?.message || err.message;
          setError(`Error ${status}: ${msg}`);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="min-h-screen">

      <HeroDeals deals={data?.deals} />
      <SmallgroupSection />
      <DestinationsSection destinations={data?.destinations} />
      <ReasonSection />

    </div>
  );
}
