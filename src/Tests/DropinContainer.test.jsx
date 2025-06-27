import { screen, render, fireEvent } from "@testing-library/react";
import DropinContainer from "../components/DropinContainer";
import { describe, expect } from "vitest";
const fakeData = [
  { title: "infos générales", content: "contenu général" },
  { title: "équipements", content: "contenu des équipements" },
];
describe("DropinContainer", () => {
  test("vérifie si les titres sont affichés et on peut ouvrir une section", () => {
    render(<DropinContainer data={fakeData} />);
    /*on vérifie si les titres sont bien affiché*/
    expect(screen.getByText("infos générales")).toBeInTheDocument();
    expect(screen.getByText("équipements")).toBeInTheDocument();
    /* si le contenu n'est pas affiché par défaut*/
    console.log(screen.getByText("contenu général"));
    expect(screen.getByText("contenu général")).toHaveClass("closed");
    expect(screen.getByText("contenu des équipements")).toHaveClass("closed");
    /* on clique sue le premier dropin*/
    fireEvent.click(screen.getByText("infos générales"));
    /* on vérifie si le contenu du premier dropin est affiché*/
    expect(screen.getByText("contenu général"));
    /* et que le contenu du deuxième dropin n'est pas affiché*/
    expect(screen.getByText("contenu des équipements")).toHaveClass("closed");
    /* on clique sur le deuxième dropin*/
    fireEvent.click(screen.getByText("équipements"));
    /* on vérifie si le contenu deuxième dropin est affiché*/
    expect(screen.getByText("contenu des équipements"));
    /* et que le contenu du premier dropin n'est pas affiché*/
    expect(screen.getByText("contenu général")).toHaveClass("closed");
  });
});
