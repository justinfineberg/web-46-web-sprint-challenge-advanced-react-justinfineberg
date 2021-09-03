import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen,waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render (<CheckoutForm />)
    let firstNameInput = screen.getByLabelText(/first name/i)
    let lastNameInput = screen.getByLabelText(/last name/i)
    let addressInput = screen.getByLabelText(/address/i)
    let cityInput = screen.getByLabelText(/city/i)
    let stateInput = screen.getByLabelText(/state/i)
    let zipInput = screen.getByLabelText(/zip/i)
    let submitBtn = screen.getByTestId('submit');

    userEvent.type(firstNameInput, "justin")
    userEvent.type(lastNameInput, "fineberg")
    userEvent.type(addressInput, "203 Fox Glove Dr")
    userEvent.type(cityInput, "Evergreen")
    userEvent.type(stateInput, "CO")
    userEvent.type(zipInput, "80439")
    userEvent.click(submitBtn)

    await waitFor(()=> {
        const message = screen.queryByText(/Your new green friends will be shipped to:/i);
        const info = screen.queryByText(/justin fineberg/i)
        const address = screen.queryByText(/203 Fox Glove Dr/i)
        const location = screen.queryByText(/Evergreen, CO 80439/i)
        expect(message).toBeInTheDocument();
        expect(info).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(location).toBeInTheDocument();
    });
});
