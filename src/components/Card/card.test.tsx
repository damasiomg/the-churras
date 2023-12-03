import { render, screen } from "@testing-library/react";
import { Card } from "./card.component";

describe('Card Component', () => {
    it('should render a card with date, description, guests amount, and total amount when isAddCard is false', () => {
        // Arrange
        const props = {
          id: 1,
          date: '27-11',
          description: 'Test description',
          guestsAmount: 5,
          totalAmount: 100,
          isAddCard: false,
          addLabel: 'Add Card',
          goTo: '#'
        };
  
        // Act
        render(<Card {...props} />);
  
        // Assert
        expect(screen.getByText('27-11')).toBeInTheDocument();
        expect(screen.getByText('Test description')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
      });

    it('should render a card with add icon and add label when isAddCard is true', () => {
        // Arrange
        const props = {
          id: 1,
          date: '27-11',
          description: 'Test description',
          guestsAmount: 5,
          totalAmount: 100,
          isAddCard: true,
          addLabel: 'Add Card',
          goTo: '#'
        };
  
        // Act
        render(<Card {...props} />);
  
        // Assert
        expect(screen.getByTestId('Add Card')).toBeInTheDocument();
      });


      it('should render a card without add icon when isAddCard is false', () => {
        // Arrange
        const props = {
          id: 1,
          date: '27-11',
          description: 'Test description',
          guestsAmount: 5,
          totalAmount: 100,
          addLabel: 'Add Card',
          goTo: '#'
        };
  
        // Act
        render(<Card {...props} />);
  
        // Assert
        expect(screen.getByTestId('Link Card')).toBeInTheDocument();
      }); 

});