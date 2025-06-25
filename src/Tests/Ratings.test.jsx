import React from "react";
import { render } from "@testing-library/react";
import StarR from "../components/Ratings";
import redStar from '../assets/redStar.svg';
import greyStar from '../assets/greyStar.svg';
import { describe, expect } from "vitest";
describe('starR component', ()=>{
    test('displays the correct number of red and grey starts based on rating', ()=>{
        const rating= 3;
        const {getAllByAltText}= render(<StarR rating={rating}/>);
        const stars= getAllByAltText('star');
        /* check the total number of stars displaying*/ 
        expect(stars.length).toBe(5);
        /* check the number of red stars */
        const redStars= stars.filter(img => img.getAttribute('src')===redStar);
        expect(redStars.length).toBe(3);
        const greyStars= stars.filter(img=> img.getAttribute('src')===greyStar);
        expect(greyStars.length).toBe(2);
    })
})