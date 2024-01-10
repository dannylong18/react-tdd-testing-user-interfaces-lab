import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm -------`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole('heading', {
        name: /hi, i'm/i,
        exact: false,
        level: 1
    })
    expect(topLevelHeading).toBeInTheDocument()

})

test("displays an image of Dan with alternative text", () => {
    render(<App />);
    const image = screen.getByAltText('Dan')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
})

test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole('heading', {
        name: /About Me/i,
        exact: false,
        level: 2
    })
    expect(secondLevelHeading).toBeInTheDocument()

})

test("displays a paragraph with text", () => {
    render(<App />);
    const biography = screen.getByText("I'm the Hulk, actually")
    expect(biography).toBeInTheDocument()

})

test("displays a link to my GitHub page with the text `GitHub`", () => {
    render(<App />);
    const gitHub = screen.getByRole('link', {
        name: /GitHub/i,
    })
    expect(gitHub).toBeInTheDocument()
    expect(gitHub).toHaveAttribute('href')
})

test("displays a link to my LinkedIn page with the text `LinkedIn`", () => {
    render(<App />);
    const linkedIn = screen.getByRole('link', {
        name: /LinkedIn/i,
    })
    expect(linkedIn).toBeInTheDocument()
    expect(linkedIn).toHaveAttribute('href')
})

//https://github.com/dannylong18
//https://www.linkedin.com/in/daniel-longpacmba/