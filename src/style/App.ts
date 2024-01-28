import {Container, styled} from "@mui/material";

export const AppContainer = styled(Container)(
    () => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `
);
