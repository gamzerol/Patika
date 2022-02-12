import * as React from 'react'
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

import Header from "./Header";
import SearchInput from "./SearchInput";

describe("Header test", () => {
  
  test("Title should be in header", () => {
    render(<Header />);
    const title = screen.getByText("Emoji Search");
    expect(title);
  });

  test("Render emoji list correctly", () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInput />, div);
  });

});

