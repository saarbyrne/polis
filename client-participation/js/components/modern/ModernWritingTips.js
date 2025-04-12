import React from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Divider
} from '@chakra-ui/react';

// This is a modern version of the WritingTips component using Chakra UI
const ModernWritingTips = () => {
  console.log('ModernWritingTips component rendered');
  
  React.useEffect(() => {
    console.log('ModernWritingTips component mounted');
    return () => {
      console.log('ModernWritingTips component unmounted');
    };
  }, []);

  return (
    <Box
      id="write_hints_div"
      display="none"
      borderLeftWidth="3px"
      borderLeftColor="#3498db"
      className="col-md-offset-1 col-md-10"
      p={4}
    >
      <VStack align="start" spacing={4}>
        <Heading as="h3" size="md" mb={5}>
          Writing Comments
        </Heading>

        <Heading as="h5" size="sm" fontWeight="600">
          Tips for writing great comments
        </Heading>

        <UnorderedList spacing={2} ml={0}>
          <ListItem ml="-23px">
            Each comment should include only a single idea or opinion.
          </ListItem>
          <ListItem ml="-23px">
            Your comment will be shown randomly.
          </ListItem>
          <ListItem ml="-23px">
            You are not replying to other comments.
          </ListItem>
        </UnorderedList>

        <Heading as="h5" size="sm" fontWeight="600" mt={5}>
          Can I edit a comment I've written?
        </Heading>
        <Text>
          Once a comment is submitted, it cannot be changed.
        </Text>

        <Heading as="h5" size="sm" fontWeight="600" mt={5}>
          Can I vote on my own comment?
        </Heading>
        <Text>
          You will automatically cast an "Agree" vote for each comment you write.
        </Text>
      </VStack>
    </Box>
  );
};

export default ModernWritingTips;
