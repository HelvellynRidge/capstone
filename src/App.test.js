import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import About from "./About";
import Footer from './Footer';
import App from './App';
import Nav from './Nav';
import { updateTimes } from './Nav';
import { initialiseTimes } from './Nav';
import { MemoryRouter } from 'react-router-dom';
import Reservations from './Reservations';

test('Renders the BookingForm heading', () => {
  const dispatchAvailableTimes = jest.fn();
  const availableTimes = ["19:00"];
  
  render(<MemoryRouter><Reservations availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes}/></MemoryRouter>);
  const headingElement = screen.getByText("Make a Booking");
  expect(headingElement).toBeInTheDocument();
});

test('Check the initial available times function 1', () => {
  const dispatchAvailableTimes = jest.fn();
  const availableTimes = ["20:00"];
  
  render(<MemoryRouter><Reservations availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes}/></MemoryRouter>);
  expect(screen.getByDisplayValue('20:00')).toBeInTheDocument();

});

test('Check the initial available times function 2', () => {
  expect(initialiseTimes()).toEqual(["17:00", "17:30", "18:00", "19:00", "19:30", "20:30", "22:30"]);
});

test('Check the update available times function', () => {
  expect(updateTimes([],"23/02/2024")).toEqual(["17:00","17:30","18:00","19:00","19:30", "20:30", "22:30"]);
});
