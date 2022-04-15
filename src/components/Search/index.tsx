import React from "react";
import { TextInputProps } from "react-native";

import {
  Container,
  Button,
  ButtonClear,
  Input,
  InputArea,
  IconX,
  IconSearch,
} from "./styles";

type SearchProps = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
};

const Search: React.FC<SearchProps> = ({ onSearch, onClear, ...rest }) => {
  return (
    <Container>
      <InputArea>
        <Input placeholder="pesquisar..." {...rest} />
        <ButtonClear onPress={onClear}>
          <IconX />
        </ButtonClear>
      </InputArea>
      <Button onPress={onSearch}>
        <IconSearch />
      </Button>
    </Container>
  );
};

export default Search;
