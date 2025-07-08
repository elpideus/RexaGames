import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Carousel from "~/components/home/Carousel";
import MostDownloaded from "~/components/home/sections/MostDownloaded";
import DonationsCTA from "~/components/home/sections/DonationsCTA";
import RexaHR from "~/components/RexaHR";

export default component$(() => {

    return (
        <>
            <Carousel />
            <DonationsCTA />
            <RexaHR />
            <MostDownloaded />
        </>
    );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
