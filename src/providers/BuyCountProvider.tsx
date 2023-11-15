import { ReactNode, useReducer } from "react";
import BuyCountReducer from "../reducers/BuyCountReducer";
import BuyCOuntContext from "../contexts/BuyCountContext";

interface Props {
  children: ReactNode;
}
const BuyCountProvider = ({ children }: Props) => {
  const [buyCount, dispatch] = useReducer(BuyCountReducer, 0);

  return (
    <BuyCOuntContext.Provider value={{ buyCount, dispatch }}>
      <div>{children}</div>
    </BuyCOuntContext.Provider>
  );
};

export default BuyCountProvider;
