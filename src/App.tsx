import React, { FC } from "react";
import { InsertPets } from "./pages/insertPets";
import { DisplayPets } from "./pages/displayPets";

const App: FC = () => (
  <>
    <InsertPets />
    <DisplayPets />
  </>
);

export default App;
