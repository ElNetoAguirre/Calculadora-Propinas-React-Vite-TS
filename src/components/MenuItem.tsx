import { Dispatch } from "react";
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer";
import { formatCurrency } from "../helpers";

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {

  return (
    <button
      className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 hover:text-white transition-all w-full p-3 flex justify-between"
      onClick={() => dispatch({type: "add-item", payload:{item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}