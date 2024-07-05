import React from 'react';
import { Flex, ActionButton, Divider } from '@adobe/react-spectrum';

function Sidebar({ setView }) {
  return (
    <Flex direction="column" gap="size-200" padding="size-200" backgroundColor="gray-100" height="100vh">
      <ActionButton onPress={() => setView('/')}>Home</ActionButton>
      <ActionButton onPress={() => setView('dashboard')}>Dashboard</ActionButton>
      <Divider size="S" />
      <ActionButton onPress={() => setView('services')}>Services</ActionButton>
      <ActionButton onPress={() => setView('airport')}>Airport</ActionButton>
    </Flex>
  );
}

export default Sidebar;
