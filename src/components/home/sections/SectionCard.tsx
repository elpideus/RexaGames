import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./SectionCard.scss?inline";

interface SectionCardProps {
    gameData: {
        cover: string,
        tags?: string[],
        title: string,
        uploader: string,
        time: string,
        version: string,
        size: string,
        views: string,
        downloads: string,
        comments: string
    };
}

export default component$(({ gameData }: SectionCardProps) => {
    useStylesScoped$(styles);
    return (
        <div class="section-game-card">
            <img width="250" height="117" src={gameData.cover} alt="Game Title Image"/>
            <div class="content">
                <span class="tags">
    {gameData.tags && gameData.tags.length > 0
        ? gameData.tags.map((tag, index) => (
            <span class="tag" key={index}>{tag}</span>
        ))
        : <span class="tag" style={{"background-color": "rgba(0, 0, 0, 0)", "border": "none", "height": "20px"}}></span>
    }
</span>
                <h3 class="title">{gameData.title}</h3>
                <h6 class="uploader">Uploaded by {gameData.uploader}</h6>
                <span class="time-version-group">
                    <h6 class="time-elapsed">{gameData.time}</h6>
                    <h6 class="version">({gameData.version})</h6>
                </span>
                <h6 class="size">Size: {gameData.size}</h6>
                <span class="numeric-info">
                    <span class="views">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 576 512">{/*Icon from Font Awesome Solid by Dave Gandy - https://creativecommons.org/licenses/by/4.0/*/}<path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32M144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3"/></svg>
                        {gameData.views}
                    </span>
                    <span class="downloads">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">{/*Icon from Font Awesome Solid by Dave Gandy - https://creativecommons.org/licenses/by/4.0/*/}<path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352zm368 56a24 24 0 1 1 0 48a24 24 0 1 1 0-48"/></svg>
                        {gameData.downloads}
                    </span>
                    <span class="comments">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">{/*Icon from Font Awesome Solid by Dave Gandy - https://creativecommons.org/licenses/by/4.0/*/}<path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.8 3.4-17.4l.3-.3c.3-.3.7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208"/></svg>
                        {gameData.comments}
                    </span>
                </span>
            </div>
        </div>
    );
});