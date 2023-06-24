import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../App';

describe('Button', () => {
  it('shows the correct initial text', () => {
    render(<Button />);
    
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeTruthy();
  });

  it('changes the button text on click', () => {
    render(<Button />);

    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    
    const updatedButtonElement = screen.getByText('You clicked!');
    expect(updatedButtonElement).toBeTruthy();
  });
});
