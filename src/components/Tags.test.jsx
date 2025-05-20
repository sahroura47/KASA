import { screen, render } from "@testing-library/react";
import Tags from "./Tags";
import { describe, expect } from "vitest";
describe('tags component', ()=>{
    test('affiche uniquement les premiers mots', ()=>{
        const testingTags=[ 'grand salon', 'vue mer', 'proche métro']
        render(<Tags tags={testingTags} />)
        /* on vérifie l'affichage des premier mots seulement*/
        expect(screen.getByText('grand')).toBeInTheDocument()
        expect(screen.getByText('vue')).toBeInTheDocument()
        expect(screen.getByText('proche')).toBeInTheDocument()
        /* on vérifie si on ne voit pas les autres mots*/
        expect(screen.queryByText('salon')).not.toBeInTheDocument()
        expect(screen.queryByText('mer')).not.toBeInTheDocument()
        expect(screen.queryByText('métro')).not.toBeInTheDocument()
    })
})