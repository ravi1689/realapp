import React, { useState } from 'react';
import {
  Flex,
  Checkbox,
  ActionButton,
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
  TextField,
  DialogTrigger,
  Dialog,
  Heading,
  Content,
  ButtonGroup,
  Button
} from '@adobe/react-spectrum';

const initialAirports = [
  { id: 1, name: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 2, international: true },
  // Add more airports here
];

function Airport() {
  const [airports, setAirports] = useState(initialAirports);
  const [showInternational, setShowInternational] = useState(false);
  const [editedAirport, setEditedAirport] = useState(null);
  const [newAirport, setNewAirport] = useState({ name: '', country: '', code: '', terminals: '', international: false });

  const handleDelete = (id) => {
    setAirports(airports.filter(airport => airport.id !== id));
  };

  const handleEdit = (airport) => {
    setEditedAirport(airport);
  };

  const handleSave = () => {
    setAirports(airports.map(airport => (airport.id === editedAirport.id ? editedAirport : airport)));
    setEditedAirport(null);
  };

  const handleAddNew = () => {
    setAirports([...airports, { ...newAirport, id: airports.length + 1, terminals: parseInt(newAirport.terminals) }]);
    setNewAirport({ name: '', country: '', code: '', terminals: '', international: false });
  };

  return (
    <Flex direction="column" gap="size-200" padding="size-200">
      <Flex direction="row" justifyContent="space-between">
        <Checkbox isSelected={showInternational} onChange={setShowInternational}>International Airports</Checkbox>
        <DialogTrigger>
          <ActionButton>Add New</ActionButton>
          {close => (
            <Dialog>
              <Heading>Add New Airport</Heading>
              <Content>
                <Flex direction="column" gap="size-200">
                  <TextField
                    label="Name"
                    value={newAirport.name}
                    onChange={(value) => setNewAirport({ ...newAirport, name: value })}
                  />
                  <TextField
                    label="Country"
                    value={newAirport.country}
                    onChange={(value) => setNewAirport({ ...newAirport, country: value })}
                  />
                  <TextField
                    label="Code"
                    value={newAirport.code}
                    onChange={(value) => setNewAirport({ ...newAirport, code: value })}
                  />
                  <TextField
                    label="Terminals"
                    type="number"
                    value={newAirport.terminals}
                    onChange={(value) => setNewAirport({ ...newAirport, terminals: value })}
                  />
                  <Checkbox
                    isSelected={newAirport.international}
                    onChange={(value) => setNewAirport({ ...newAirport, international: value })}
                  >
                    International
                  </Checkbox>
                </Flex>
              </Content>
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>Cancel</Button>
                <Button variant="cta" onPress={() => { handleAddNew(); close(); }}>Add</Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogTrigger>
      </Flex>
      <TableView aria-label="Airports Table" selectionMode="none">
        <TableHeader>
          <Column>Name</Column>
          <Column>Country</Column>
          <Column>Code</Column>
          <Column>Terminals</Column>
          <Column>Actions</Column>
        </TableHeader>
        <TableBody>
          {airports.filter(airport => !showInternational || airport.international).map(airport => (
            <Row key={airport.id}>
              <Cell>{airport.name}</Cell>
              <Cell>{airport.country}</Cell>
              <Cell>{airport.code}</Cell>
              <Cell>{airport.terminals}</Cell>
              <Cell>
                <Flex direction="row" gap="size-100">
                  <DialogTrigger>
                    <ActionButton onPress={() => handleEdit(airport)}>Edit</ActionButton>
                    {close => (
                      <Dialog>
                        <Heading>Edit Airport</Heading>
                        <Content>
                          <Flex direction="column" gap="size-200">
                            <TextField
                              label="Name"
                              value={editedAirport ? editedAirport.name : ''}
                              onChange={(value) => setEditedAirport({ ...editedAirport, name: value })}
                            />
                            <TextField
                              label="Country"
                              value={editedAirport ? editedAirport.country : ''}
                              onChange={(value) => setEditedAirport({ ...editedAirport, country: value })}
                            />
                            <TextField
                              label="Code"
                              value={editedAirport ? editedAirport.code : ''}
                              onChange={(value) => setEditedAirport({ ...editedAirport, code: value })}
                            />
                            <TextField
                              label="Terminals"
                              type="number"
                              value={editedAirport ? editedAirport.terminals : ''}
                              onChange={(value) => setEditedAirport({ ...editedAirport, terminals: parseInt(value) })}
                            />
                            <Checkbox
                              isSelected={editedAirport ? editedAirport.international : false}
                              onChange={(value) => setEditedAirport({ ...editedAirport, international: value })}
                            >
                              International
                            </Checkbox>
                          </Flex>
                        </Content>
                        <ButtonGroup>
                          <Button variant="secondary" onPress={close}>Cancel</Button>
                          <Button variant="cta" onPress={() => { handleSave(); close(); }}>Save</Button>
                        </ButtonGroup>
                      </Dialog>
                    )}
                  </DialogTrigger>
                  <ActionButton onPress={() => handleDelete(airport.id)}>Delete</ActionButton>
                </Flex>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </Flex>
  );
}

export default Airport;
