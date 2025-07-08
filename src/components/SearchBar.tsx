import {component$, useStylesScoped$} from '@builder.io/qwik';
import styles from "./SearchBar.scss?inline"

export default component$(() => {
    useStylesScoped$(styles);
   return (
       <div class="container">
           <input type="text" placeholder="Search">

           </input>
       </div>
   );
});