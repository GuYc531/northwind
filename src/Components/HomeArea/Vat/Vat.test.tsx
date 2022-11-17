import { render, cleanup, screen } from "@testing-library/react";
import { execPath } from "process";
import ReactDOM from "react-dom";
import Vat from "./Vat";

describe("Vat component", () => {
    const percent = 17;
    const component = <Vat percent={percent}/>

    beforeEach(() =>{
        render(component);
    })

    afterEach(() =>{
        cleanup();
    })

    it("should render into DOM", () =>{
        ReactDOM.render(component, document.createElement("div"));
    });

    it("should contain several element", () =>{
        expect(screen.getByText("Vat calculator")).toBeDefined(); //get the element by inner text
        expect(screen.getByTestId("main-div")).toBeDefined(); // get the element by data-testid attribute
        expect(screen.getByTitle("Calculating vat")).toBeDefined(); // get the element by title attribute
        expect(screen.getByLabelText("price:", {exact:false})).toBeDefined(); // get the element by label text
        expect(screen.getByPlaceholderText("enter price", {exact:false})).toBeDefined(); // get the element by placeholder text

    });

    it("should contain specific element type", () =>{
        expect(screen.getByTitle(/calculating vat/i)).toBeInstanceOf(HTMLElement); // get
        expect(screen.getByLabelText("price", {exact: false})).toBeInstanceOf(HTMLInputElement); // get
    })

    it("should contain specific css classes", () => {
        expect(screen.getByTestId("main-div")).toHaveClass("Vat Box"); // get
    });

    it("should contain an input type =number", () => {
        expect(screen.getByPlaceholderText("enter price")).toHaveAttribute("type", "number"); // get
    });


});