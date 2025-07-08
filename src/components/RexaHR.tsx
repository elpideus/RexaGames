import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./RexaHR.scss?inline";

export default component$(() => {
    useStylesScoped$(styles)
    return (
        <hr class="rexa-hr" />
    );

});