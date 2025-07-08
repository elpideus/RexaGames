import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./DonationsCTA.scss?inline";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="donations-cta-area">
            <div class="donations-cta">
                <span class="title-area">
                    <h2 class="title">Current Donation Goal</h2>
                    <div class="donators-avatars">
                        <img height="40" width="40" src="https://rexagames.com/uploads/monthly_2024_05/Ekrangrnts2024-04-03015810.thumb.png.c253b2a42103043323d908d560708913.png" alt="User Name" />
                        <img height="40" width="40" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201024%201024%22%20style%3D%22background%3A%2362a7c4%22%3E%3Cg%3E%3Ctext%20text-anchor%3D%22middle%22%20dy%3D%22.35em%22%20x%3D%22512%22%20y%3D%22512%22%20fill%3D%22%23ffffff%22%20font-size%3D%22700%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Roboto%2C%20Helvetica%2C%20Arial%2C%20sans-serif%22%3EK%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="User Name" />
                        <img height="40" width="40" src="https://rexagames.com/uploads/monthly_2025_06/ico_rj_circle.thumb.jpeg.fc409388f02b5f7a2ab07455aee8bbb0.jpeg" alt="User Name" />
                    </div>
                    <h5 class="completed-out-of-target">($24 out of $50 target)</h5>
                    <button class="donate-button"><span>Donate Now!</span> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512">{/*Icon from Font Awesome Solid by Dave Gandy - https://creativecommons.org/licenses/by/4.0/*/}<path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                </span>
                <div class="progress-bar-area">
                    <div class="progress-bar">
                        <div class="progress-bar-filled" />
                    </div>
                    <h4 class="percentage-value">48%</h4>
                </div>
            </div>
        </div>
    )

});
