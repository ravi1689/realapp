import React from 'react';
import { Flex, ActionButton, Text } from '@adobe/react-spectrum';
import './styles/styles.css'; // Correct path to styles.css

function Navbar() {
  return (
    <div className='container'>
    <Flex direction="row" justifyContent="space-between" background-color="black" alignItems="center" className="navbar">
      <Text className="navbar-text">Hava Havai</Text>
      <Flex direction="row" gap="size-200" className="navbar-actions">
        <ActionButton className="navbar-action-button">Profile</ActionButton>
      </Flex>
    </Flex>
    </div>

  );
}

export default Navbar;
