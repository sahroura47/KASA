import Navbar from "./Navbar";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect } from "vitest";
describe ('Navbar component', ()=>{
    test('affiche bien les liens de redirections', ()=>{
        render(
            <BrowserRouter>
            <Navbar />
            </BrowserRouter>
        )
        const homeLink= screen.getByText(/Accueil/i)
        const AboutLink=screen.getByText(/A propos/i)
        expect(homeLink).toBeInTheDocument
        expect(homeLink.closest('a')).toHaveAttribute('href', '/')
        expect(AboutLink).toBeInTheDocument
        expect(AboutLink.closest('a')).toHaveAttribute('href', '/a-propos')
    })
})