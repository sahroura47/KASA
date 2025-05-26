import { screen, render, waitFor } from "@testing-library/react";
import CardsContainer from "./Cards-container";
import { afterAll, afterEach, beforeAll, describe, expect } from "vitest";
import { server, setupServer } from '../mocks/serverSetup';
import { http } from "msw";
import { MemoryRouter } from "react-router-dom";

/* des données simulées*/
const fakeCards = [
  { id: "1", title: "Appartement Paris", pictures: ["image1.jpg"] },
  { id: "2", title: "Villa Nantes", pictures: ["image2.jpg"] },
];

 /* on démarre et arrête le serveur */
 beforeAll(()=> server.listen());
 afterEach(()=> server.resetHandlers());
 afterAll(()=>server.close());

 describe('cardsContainer component', ()=>{
    test('cards display', async ()=>{
        server.use(
            /*on simule on serveur*/ 

    http.get('http://localhost:8080/api/properties',(req,res)=>{
        return res.json(fakeCards);
    }));
        render(
            <MemoryRouter>
                <CardsContainer />
            </MemoryRouter>
        );
   /* on vérifie si les titres sont affichés */
   await waitFor (()=>{
    expect(screen.getByText(/Appartement Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Villa Nantes/i)).toBeInTheDocument();
   });
   /* on vérifie si les images sont présentes */ 
   expect(screen.getByAltText(/Appartement Paris/i)).toHaveAttribute('src', 'image1.jpg');
   expect(screen.getByAltText(/Villa Nantes/i)).toHaveAttribute('src', 'image2.jpg');
    });
 });
