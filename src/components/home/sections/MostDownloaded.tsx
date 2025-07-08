import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./MostDownloaded.scss?inline"
import SectionCard from "~/components/home/sections/SectionCard";

export default component$(() => {
    useStylesScoped$(styles);

    const parseKValue = (valueString: string) => {
        if (typeof valueString === 'string' && valueString.toLowerCase().endsWith('k')) {
            return parseFloat(valueString) * 1000;
        }
        return parseFloat(valueString);
    };

    const gamesData = [
        {
            cover: "https://preview.redd.it/ymd3jl5achh71.png?width=640&crop=smart&auto=webp&s=f258d5744cd64a7defa444b85003b4a44d0137ff",
            tags: [ "Online" ],
            title: "Minecraft",
            uploader: "cube_master",
            time: "1 week ago",
            version: "v5.0.9",
            size: "12.3 GB",
            views: "104k",
            downloads: "46.8k",
            comments: "283"
        },
        {
            cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1748630546",
            tags: [ "Online" ],
            title: "Elden Ring",
            uploader: "ragnarokz",
            time: "2 days ago",
            version: "v1.03",
            size: "89.2 GB",
            views: "58k",
            downloads: "38.2k",
            comments: "147"
        },
        {
            cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/a3cdc6f40d97df8ac993679c2dd1edeb5222421e/header.jpg?t=1747346162",
            title: "Hogwarts Legacy",
            uploader: "elpideus",
            time: "3 days ago",
            version: "v1.4.7",
            size: "41.6 GB",
            views: "46k",
            downloads: "29.7k",
            comments: "91"
        },
        {
            cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1749198613",
            title: "Cyberpunk 2077",
            uploader: "nova_tech",
            time: "6 hours ago",
            version: "v2.2.1",
            size: "71.8 GB",
            views: "31k",
            downloads: "24.3k",
            comments: "62"
        },
        {
            cover: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/42640a95e70bcf4695876cb30a5e9dd1517622f5/header.jpg?t=1749748681",
            tags: [ "Call of Duty Series", "Online" ],
            title: "Call of Duty: Black Ops VI",
            uploader: "elpideus",
            time: "15 hours ago",
            version: "v12.6",
            size: "64.4 GB",
            views: "23k",
            downloads: "21.0k",
            comments: "36"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1682540075",
            tags: [ "RPG" ],
            title: "Disco Elysium",
            uploader: "ravenclaw",
            time: "1 day ago",
            version: "v1.2.5",
            size: "18.4 GB",
            views: "19k",
            downloads: "18.6k",
            comments: "50"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/431960/header.jpg?t=1689414807",
            tags: [ "Action", "Multiplayer" ],
            title: "Dead by Daylight",
            uploader: "killerqueen",
            time: "5 days ago",
            version: "v6.0",
            size: "10.1 GB",
            views: "28k",
            downloads: "16.7k",
            comments: "77"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg?t=1683734287",
            tags: [ "Shooter" ],
            title: "Rocket League",
            uploader: "speedster",
            time: "4 hours ago",
            version: "v2.11",
            size: "15.7 GB",
            views: "22k",
            downloads: "14.8k",
            comments: "35"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1687264231",
            tags: [ "Strategy" ],
            title: "Civilization VI",
            uploader: "strategyking",
            time: "2 weeks ago",
            version: "v1.0.5",
            size: "24.9 GB",
            views: "17k",
            downloads: "13.3k",
            comments: "44"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1685969742",
            tags: [ "Adventure" ],
            title: "Subnautica",
            uploader: "deepdiver",
            time: "3 days ago",
            version: "v1.6.7",
            size: "13.8 GB",
            views: "12k",
            downloads: "11.9k",
            comments: "28"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1683787489",
            tags: [ "Survival" ],
            title: "The Forest",
            uploader: "woodsman",
            time: "10 hours ago",
            version: "v2.0",
            size: "8.3 GB",
            views: "15k",
            downloads: "10.4k",
            comments: "33"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1683734287",
            tags: [ "Horror" ],
            title: "Amnesia: The Dark Descent",
            uploader: "nightmare",
            time: "7 days ago",
            version: "v3.3",
            size: "4.2 GB",
            views: "11k",
            downloads: "9.8k",
            comments: "22"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg?t=1684872883",
            tags: [ "Indie" ],
            title: "Hades",
            uploader: "stygian",
            time: "1 week ago",
            version: "v1.9",
            size: "15.0 GB",
            views: "14k",
            downloads: "8.5k",
            comments: "31"
        },
        {
            cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/323610/header.jpg?t=1686207217",
            tags: [ "Platformer" ],
            title: "Hollow Knight",
            uploader: "knightmare",
            time: "2 weeks ago",
            version: "v1.5",
            size: "9.5 GB",
            views: "16k",
            downloads: "7.6k",
            comments: "26"
        }
    ];

    const sortedGamesData = [...gamesData].sort((a, b) => {
        const downloadsA = parseKValue(a.downloads);
        const downloadsB = parseKValue(b.downloads);
        return downloadsB - downloadsA;
    });

    return (
        <div class="section">
            <span class="title-bar">
                <h2 class="section-title">Most Downloaded</h2>
                <h4 class="more-button">More</h4>
            </span>
            <div class="cards">
                {sortedGamesData.map((game, index) => (
                    <SectionCard key={index} gameData={game} />
                ))}
            </div>
        </div>
    );
});
