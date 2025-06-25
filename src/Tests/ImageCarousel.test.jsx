import { expect, test } from "vitest";
import ImageCarousel from "../components/ImageCarousel";
import { screen, render, fireEvent } from "@testing-library/react";
describe('imageCarousel component',()=>{
    const fakePictures=[
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ]
    test('affiche la première image au chargement', () =>{
        render(<ImageCarousel pictures={fakePictures} />)
        const image=screen.getByRole('img', {name:/picture1/i})
            expect(image).toBeInTheDocument()
            expect(image).toHaveAttribute('src', 'image1.jpg')
        })
    test('gérer le carroussel', ()=>{
        render(<ImageCarousel pictures={fakePictures} />)
        /* on passe au suivant*/
        const nextButton=screen.getByRole('button', {name:/suivant/i})
        fireEvent.click(nextButton)
        const image=screen.getByRole('img', {name:/picture2/i})
        expect(image).toHaveAttribute('src','image2.jpg')
        /*on passe au précédent */
        const prevButton=screen.getByRole('button', {name:/précédent/i})
        console.log(prevButton);
        fireEvent.click(prevButton)
        const image2=screen.getByRole('img', {name:/picture1/i})
        expect(image2).toHaveAttribute('src','image1.jpg')
    })    
    test('on cache les flèche si une seule image', ()=>{
        render(<ImageCarousel pictures={['imageUnique.jpg']}/>)
        expect(screen.queryByRole('button', {name:/suivant/i})).toBeNull()
        expect(screen.queryByRole('button', {name:/précédent/i})).toBeNull()
    })
    test('affichage de message si la liste est vide', ()=>{
        render(<ImageCarousel pictures={[]} />)
        expect(screen.getByText(/aucune image à afficher/i)).toBeInTheDocument()
    })
})