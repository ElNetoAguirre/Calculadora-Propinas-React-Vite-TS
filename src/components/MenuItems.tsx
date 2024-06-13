import type { MenuItem } from "../types"
import { formatCurrency } from '../helpers';

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItems({item, addItem} : MenuItemProps) {

  return (
    <button
      className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 hover:text-white transition-all w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
