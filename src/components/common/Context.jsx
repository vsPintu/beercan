import { createContext, useState } from "react";

export const toggleContext = createContext(null);

export const ToggleProvider = (props) => {
    const [toggleNavBtn, setToggleNavBtn] = useState(false);
  return(
    <toggleContext.Provider value={{toggleNavBtn, setToggleNavBtn}}>{props.children}</toggleContext.Provider>
  )
};
