import React from 'react';

import CountersContainer from './CountersContainer';

import { render, fireEvent, waitForElement } from '@testing-library/react'
import {computeRandomNumber} from "../helper";
// import '@testing-library/jest-dom/extend-expect'

jest.mock("../helper", () => ({
    computeRandomNumber: jest.fn(),
}));

it('renders without crashing', async () => {
    const { getByText, getAllByText } = render(<CountersContainer />);

    const newCounterButton = getByText('Add new Counter');

    fireEvent.click(newCounterButton);
    fireEvent.click(newCounterButton);

    const counters = await waitForElement(() => getAllByText('Counter:'));
    expect(counters).toHaveLength(3);

    expect(Number(counters[0].querySelector('div').textContent)).toBe(6);
    expect(Number(counters[1].querySelector('div').textContent)).toBe(6);
    expect(Number(counters[2].querySelector('div').textContent)).toBe(6);

    fireEvent.click(counters[1].querySelector('.increment'));
    fireEvent.click(counters[1].querySelector('.increment'));
    expect(Number(counters[1].querySelector('div').textContent)).toBe(8);

    fireEvent.click(counters[2].querySelector('.decrement'));
    fireEvent.click(counters[2].querySelector('.decrement'));
    fireEvent.click(counters[2].querySelector('.decrement'));
    expect(Number(counters[2].querySelector('div').textContent)).toBe(3);

    computeRandomNumber.mockReturnValue(2);
    fireEvent.click(counters[0].querySelector('.randomize'));
    expect(Number(counters[0].querySelector('div').textContent)).toBe(2);

    computeRandomNumber.mockReturnValue(78);
    fireEvent.click(counters[1].querySelector('.randomize'));
    expect(Number(counters[1].querySelector('div').textContent)).toBe(78);
});
