import { shoeArr } from "../../data";
import { BUY, CHANGEQTY, DELETESHOE, VIEWDETAIL } from "../const/shoeConst";
let initialState = {
  shoeArr: shoeArr,
  detailshoe: shoeArr[0],
  cart: [],
};
export const shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEWDETAIL: {
      state.detailshoe = payload;
      return { ...state };
    }
    case DELETESHOE: {
      let clonecart = state.cart.filter((item) => item.id !== payload);
      return { ...state, cart: clonecart };
    }
    case BUY: {
      let clonecart = [...state.cart];
      let index = clonecart.findIndex((item) => item.id == payload.id);
      if (index == -1) {
        let newShoe = { ...payload, soLuong: 1 };
        clonecart.push(newShoe);
      } else {
        clonecart[index].soLuong++;
      }
      return { ...state, cart: clonecart };
    }
    case CHANGEQTY: {
      let { shoe, option } = payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == shoe.id);
      cloneCart[index].soLuong = cloneCart[index].soLuong + option;
      // so luong co the la +1 or -1
      if (cloneCart[index].soLuong === 0) {
        // sau khi update xong neu soluong =0 thi xoa
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
