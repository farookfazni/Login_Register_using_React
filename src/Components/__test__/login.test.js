import React from "react";
import reactDom from "react-dom";
import Login, {handleSubmit} from "../Login";
import {render, fireEvent} from '@testing-library/react';

describe("login", () => {
    test("login form should be in the component", () => {
        const view = render(<Login/>);
        const labelNode = view.screen.getByText("Email");
        expect(labelNode).toBeInTheDocument()
    });
    test("email field should have label", () => {
        const view = render(<Login/>);
        const emailinputNode = view.screen.getByLabelText("Email");
        expect(emailinputNode).getAttribute("name").toBe("email");
    });
    test("email input should accept text", () => {
        const view = render(<Login/>);
        const emailinputNode = view.screen.getByLabelText("Email");
        expect(emailinputNode.value).toMatch("");
        fireEvent.change(emailinputNode, {target: {value: 'testing'}});
        expect(emailinputNode.value).toMatch("testing");
    });
});