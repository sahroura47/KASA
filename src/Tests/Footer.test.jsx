import Footer from "../components/Footer";
import {render, screen} from '@testing-library/react'
import { expect } from "vitest";
describe ('Footer component', () =>{
    test('Should render without crash', ()=>{
        render(<Footer />)
        /* on vérifie si le texte est présent*/
        expect(screen.getByText(/© 2020 Kasa. All rights reserved/i)).toBeInTheDocument()
        /* on vérifie la présence du logo dans le footer */
        const img= screen.getByAltText(/footerImg/i)
        expect (img).toBeInTheDocument()

    })
})