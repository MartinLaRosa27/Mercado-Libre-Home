import Head from "next/head";
import { Banner } from "@/components/home/Banner";
import { PaymentMethods } from "@/components/home/PaymentMethods";
import { Benefits } from "@/components/home/Benefits";
import { LevelUpgrade } from "@/components/home/LevelUpgrade";
import { Discover } from "@/components/home/Discover";
import { Interest } from "@/components/home/Interest";
import { Legal } from "@/components/home/Legal";
import { BestShops } from "@/components/home/BestShops";
import { Offers } from "@/components/home/Offers";
import { OffersBanner } from "@/components/home/OffersBanner";
import { Collections } from "@/components/home/Collections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre Argentina - Enviós Gratis en el día</title>
      </Head>
      <Banner />
      <PaymentMethods />
      <Offers />
      <LevelUpgrade />
      <Benefits />
      <OffersBanner />
      <Discover />
      <BestShops />
      <Interest />
      <Collections />
      <Legal />
    </>
  );
}
