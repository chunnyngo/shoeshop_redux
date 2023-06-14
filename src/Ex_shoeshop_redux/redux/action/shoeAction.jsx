import { VIEWDETAIL } from "../const/shoeConst";
import { BUY } from "../const/shoeConst";
import { DELETESHOE } from "../const/shoeConst";
import { CHANGEQTY } from "../const/shoeConst";
export let viewDetailAction = (shoe) => {
  return {
    type: VIEWDETAIL,
    payload: shoe,
  };
};
export let buyAction = (shoe) => {
  return {
    type: BUY,
    payload: shoe,
  };
};
export let deleteAction = (idShoe) => {
  return {
    type: DELETESHOE,
    payload: idShoe,
  };
};
export let changQtyAction = (shoe, option) => {
  return {
    type: CHANGEQTY,
    payload: {
      shoe: shoe,
      option: option,
    },
  };
};
