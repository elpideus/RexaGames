import {component$, isDev, useStylesScoped$} from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import styles from "./global.scss?inline";
import NavBar from "~/components/NavBar";
import SearchBar from "~/components/SearchBar";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <NavBar />
        <SearchBar />
        <main>
            <RouterOutlet />
        </main>
      </body>
    </QwikCityProvider>
  );
});
