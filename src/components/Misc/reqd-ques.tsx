import { Flex, Badge, Box, Text } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { formType } from '../../types/event-form';

const formData: formType = {
    preDefinedQues: [
      { val: 'Name', isRequired: true, id: 1 },
      { val: 'Email Address', isRequired: true, id: 2 },
      { val: 'Wallet Address', isRequired: true, id: 3 },
    ],
    customQues: [],
  };

const RequiredQues = () => {
  return (
    <Flex direction='column' gap='2' fontWeight='medium'>
      <Flex fontSize='xl' fontWeight='medium' alignItems='center' gap='1'>
        <BsFillPersonFill size={22} /> Identity
      </Flex>
      {formData?.preDefinedQues.map((ques) => (
        <Flex w='60%' justifyContent='space-between' ml='3' key={ques.id}>
          <Text textColor='gray.600'>{ques.val}</Text>

          <Badge
            display='grid'
            placeItems='center'
            px='3'
            rounded='full'
            colorScheme='purple'
          >
            Required
          </Badge>
        </Flex>
      ))}
    </Flex>
  );
};

export default RequiredQues;