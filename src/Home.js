import React from "react";
import { PropsAndState } from "../src/components/PropsAndState"

export const Home = () => (
    <>
    <div class="kandyKornerHomePage">
        <h1>Welcome to Kandy Korner</h1>
        <h2>Delicous Candy that'll make you smile.</h2>

        <address>
            <h3>Visit Us</h3>
            <h3>500 We On Our Way Up Drive</h3>
        </address>
        
        <PropsAndState yourName={"Erica"} />
        </div>
        
    </>
)