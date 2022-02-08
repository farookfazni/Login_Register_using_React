import React from "react";
import reactDom from "react-dom";
import Signup from "../Signup";
import {render, fireEvent} from '@testing-library/react';

describe("signup", () => {
    test("login form should be in the component", () => {
        const view = render(<Signup/>);
        const labelNode = view.screen.getByText("Email");
        expect(labelNode).toBeInTheDocument()
    });
    test("email field should have label", () => {
        const view = render(<Signup/>);
        const emailinputNode = view.screen.getByLabelText("Email");
        expect(emailinputNode).getAttribute("name").toBe("email");
    });
    test("email input should accept text", () => {
        const view = render(<Signup/>);
        const emailinputNode = view.screen.getByLabelText("Email");
        expect(emailinputNode.value).toMatch("");
        fireEvent.change(emailinputNode, {target: {value: 'testing'}});
        expect(emailinputNode.value).toMatch("testing");
    });
});