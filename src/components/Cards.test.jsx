import { screen, render } from "@testing-library/react";
import Cards from "./Cards";
import { expect, test } from "vitest";
describe('Cards component', ()=>{
    test('gérer le contenu des cartes', ()=>{
        const imageUrl='https://example.com/test.jpg';
        const caption='Belle maison';
        render(<Cards imageUrl={imageUrl} caption={caption}/>)
        const image=screen.getByRole('img', {name:/Belle maison/i});
        const figcaption=screen.getByText(/Belle maison/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', imageUrl);
        expect(figcaption).toBeInTheDocument();
    });
});
