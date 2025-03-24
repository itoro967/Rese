import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
export default function Example({ group_name, items }) {
  const [name, setName] = useState("All "+group_name);
  items = items.map((item) => {
    return (
      <MenuItem key={item}>
        <a
          href="#"
          onClick={() => setName(item)}
          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
        >
          {item}
        </a>
      </MenuItem>
    )
  });
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          {name}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {/* 全選択 */}
          <MenuItem key={group_name}>
            <a
              href="#"
              onClick={() => setName("All "+group_name)}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              All {group_name}
            </a>
          </MenuItem>
          {/*  */}
          {items}
        </div>
      </MenuItems>
    </Menu>
  )
}
