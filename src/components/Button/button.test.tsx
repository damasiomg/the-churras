import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './button.component';

describe('Button Component', () => {
    it('should render a button with the provided label', () => {
        render(<Button label='Test Label'/>) //Arrange
        const element = screen.getByText('Test Label') //Act
        expect(element).toBeInTheDocument(); //Assert
    });

    it('should call the provided action function when the button is clicked', () => {
        const action = jest.fn();
        render(<Button label="Test Label" action={action} />);
        fireEvent.click(screen.getByText('Test Label'));
        expect(action).toHaveBeenCalled();
    });
    
    it('should render a button without an action function', () => {
        render(<Button label="Test Label" />);
        const button = screen.getByText('Test Label');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });
});
