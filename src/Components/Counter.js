import {
  Button,
  Text,
  Flex,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <>
      <Box>
        <Flex gap={2}>
          <Text as="b" fontSize={{ lg: "20px" }}>
            Count:
          </Text>
          <Text fontSize={{ lg: "20px" }} data-testid="count">
            {count}
          </Text>
        </Flex>
      </Box>

      <Wrap display="flex" mt={3}>
        <WrapItem>
          <Button colorScheme="orange" onClick={increment}>
            Increment
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="green" onClick={decrement}>
            Decrement
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="red" onClick={restart}>
            Restart
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="yellow" onClick={switchSigns}>
            Switch Signs
          </Button>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default Counter;
