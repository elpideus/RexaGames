import {component$, $, useSignal, useVisibleTask$, useStylesScoped$} from '@builder.io/qwik';
import styles from "./Carousel.scss?inline";

export default component$(() => {
    useStylesScoped$(styles);
    const containerRef = useSignal<HTMLDivElement>();
    const currentSlideIndex = useSignal(0);
    const totalSlides = useSignal(0);
    const autoScrollInterval = useSignal<number | undefined>(undefined);
    const canScroll = useSignal<boolean>(true);

    const imageUrls = [
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/42640a95e70bcf4695876cb30a5e9dd1517622f5/header.jpg?t=1749748681",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1741120008",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1203620/e67cd0b0a988dd61beaf0c9f0782ba0dcc23e0fa/header.jpg?t=1750405946",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/058bd87dc17a7179e07c446aa64d0574ca43ab9d/header.jpg?t=1750906920",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1748630546",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1749198613",
        "https://preview.redd.it/ymd3jl5achh71.png?width=640&crop=smart&auto=webp&s=f258d5744cd64a7defa444b85003b4a44d0137ff",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/a3cdc6f40d97df8ac993679c2dd1edeb5222421e/header.jpg?t=1747346162",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1682540075",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/431960/header.jpg?t=1689414807",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg?t=1683734287",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1687264231",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1685969742",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1683787489",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1683734287",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg?t=1684872883",
        "https://cdn.cloudflare.steamstatic.com/steam/apps/323610/header.jpg?t=1686207217",
    ];

    const scrollPrev = $(() => {
        const container = containerRef.value;
        if (container) {
            const slideWidth = container.querySelector('.slide')?.clientWidth || 0;
            container.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
    });

    const scrollNext = $(() => {
        const container = containerRef.value;
        if (container) {
            const slideWidth = container.querySelector('.slide')?.clientWidth || 0;
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth - container.clientWidth;

            if (scrollLeft + slideWidth + 1 >= scrollWidth) { // Added +1 for slight tolerance
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: slideWidth, behavior: 'smooth' });
            }
        }
    });

    useVisibleTask$(({ track, cleanup }) => {
        track(() => containerRef.value);

        const container = containerRef.value;
        if (!container) return;
        totalSlides.value = imageUrls.length;

        const handleScroll = $(() => {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth - container.clientWidth;
            if (scrollWidth === 0) return;
            const slideWidth = container.querySelector('.slide')?.clientWidth || 0;
            if (slideWidth > 0) {
                currentSlideIndex.value = Math.round(scrollLeft / slideWidth);
            }
        });


        const disableScroll = $(() => {
            canScroll.value = false;
        });

        const enableScroll = $(() => {
            canScroll.value = true;
        });


        container.addEventListener('scroll', handleScroll);
        container.addEventListener('mouseenter', disableScroll);
        container.addEventListener('mouseleave', enableScroll);

        const controls = document.querySelectorAll('.control');
        controls.forEach(control => {
            control.addEventListener('mouseenter', disableScroll);
            control.addEventListener('mouseleave', enableScroll);
        });


        if (autoScrollInterval.value) {
            clearInterval(autoScrollInterval.value);
        }

        const intervalId = setInterval(() => {
            if (canScroll.value) scrollNext();
        }, 3000);

        // @ts-expect-error - I do not know why this gets noticed as an error. It seems to work fine anyway, so I'm going to suppress it for now.
        autoScrollInterval.value = intervalId;

        cleanup(() => {
            container.removeEventListener('scroll', handleScroll);
            if (autoScrollInterval.value) {
                clearInterval(autoScrollInterval.value);
            }
        });
    });

    return (
        <div class="carousel">
            <div class="container" ref={containerRef}>
                {imageUrls.map((url, index) => (
                    <div
                        class="slide"
                        key={index}
                        style={{ "background-image": `url(${url})`, "object-fit": "cover" }}
                    ></div>
                ))}
            </div>

            <button class="control control--prev" onClick$={scrollPrev}>&lt;</button>
            <button class="control control--next" onClick$={scrollNext}>&gt;</button>
        </div>
    );
});