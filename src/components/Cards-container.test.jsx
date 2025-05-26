import { screen, render, waitFor } from "@testing-library/react";
import CardsContainer from "./Cards-container";
import { afterAll, afterEach, beforeAll, describe, expect } from "vitest";
import { server } from '../mocks/serverSetup';
import { MemoryRouter } from "react-router-dom";

 /* on démarre et arrête le serveur */
 beforeAll(()=> server.listen());
 afterEach(()=> server.resetHandlers());
 afterAll(()=>server.close());

 describe('cardsContainer component', ()=>{
    test('cards display', async ()=>{
        render(
            <MemoryRouter>
                <CardsContainer />
            </MemoryRouter>
        );
   /* on vérifie si les titres sont affichés */
   await waitFor (()=>{
    expect(screen.getByText(/Appartement Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Maison Nantes/i)).toBeInTheDocument();
   });
   /* on vérifie si les images sont présentes */ 
   expect(screen.getByAltText(/Appartement Paris/i)).toHaveAttribute('src', 'image2.jpg');
   expect(screen.getByAltText(/Maison Nantes/i)).toHaveAttribute('src', 'image1.jpg');
    });
 });
