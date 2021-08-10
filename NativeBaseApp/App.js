import React, {useState} from 'react';
import {ActionSheetIOS, Platform} from 'react-native';

import {
  NativeBaseProvider,
  Box,
  Button,
  Checkbox,
  Center,
  Modal,
  Actionsheet,
  useDisclose,
  Text,
} from 'native-base';

const App = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const [groupValues, setGroupValues] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('🔮');

  const onPress = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Generate number', 'Reset'],
          destructiveButtonIndex: 2,
          cancelButtonIndex: 0,
          userInterfaceStyle: 'dark',
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            setResult(Math.floor(Math.random() * 100) + 1);
          } else if (buttonIndex === 2) {
            setResult('🔮');
          }
        },
      );
      return false;
    }

    onOpen();
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>Hello world</Box>
        <Button
          variant="solid"
          size={'sm'}
          isLoading={isLoading}
          isLoadingText="Submitting"
          onPress={() => setShowModal(true)}>
          PRIMARY
        </Button>

        <Button onPress={onOpen}>Actionsheet</Button>

        <Text>{result}</Text>
        <Button onPress={onPress}>Show Native Action Sheet</Button>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item>Option 1</Actionsheet.Item>
            <Actionsheet.Item>Option 2</Actionsheet.Item>
            <Actionsheet.Item>Option 3</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Modal Title</Modal.Header>
            <Modal.Body>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis. Sunt ad dolore quis aute consequat.
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim ullamco deserunt aute id consequat veniam incididunt
              duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim
              nostrud elit officia tempor esse quis. Sunt ad dolore quis aute
              consequat. Magna exercitation reprehenderit magna aute tempor
              cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
              sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
              Lorem aliqua enim exercitation reprehenderit magna aute tempor
              cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
              sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
              Lorem aliqua enim ullamco deserunt aute id consequat veniam
              incididunt duis in sint irure nisi. Mollit officia cillum Lorem
              ullamco minim nostrud elit officia tempor esse quis. Sunt ad
              dolore quis aute consequat. Magna exercitation reprehenderit magna
              aute tempor cupidatat consequat elit dolor adipisicing. Mollit
              dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim
            </Modal.Body>
            <Modal.Footer>
              <Button.Group variant="ghost" space={2}>
                <Button>LEARN MORE</Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  ACCEPT
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
