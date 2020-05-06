import React from "react";
import { HelloMessage } from ".";
import { render } from "@testing-library/react";

describe("Hello message tests", () => {
    it("should render given message", () => {
        const { getByText, debug } = render(<HelloMessage message="World" />);
        getByText(/World/i);
        debug();
    });
});
