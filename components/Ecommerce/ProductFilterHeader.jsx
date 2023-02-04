'use client'
import { Fragment, useState, useContext } from 'react'
import {CartContext} from "../../context/ShopContext";
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'

import {XIcon, ChevronDownIcon} from "@heroicons/react/outline";

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: '', label: 'All' },
      { value: 'computers', label: 'Computers' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductFilterHeader() {
  const [open, setOpen] = useState(false)
  const {tag, setTag} = useContext(CartContext)
  const [category, setCategory] = useState("All")

  return (
    <div className="">
      {/* Mobile filter dialog */}

      <div className="max-w-3xl px-4 mx-auto text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Browse Our Products</h1>
          <p className="max-w-3xl mx-auto mt-4 text-base text-gray-500">
            {`Welcome to the fastest ecommerce site you've ever used.`}
          </p>
        </div>

        <section aria-labelledby="filter-heading" className="flex flex-col gap-3 py-6 border-t border-gray-200">
          <div className="flex items-center justify-center w-full mb-5 md:justify-start">
            <Popover.Group className="flex sm:items-baseline sm:space-x-8">
              {filters.map((section, sectionIdx) => (
                <Popover
                  as="div"
                  key={section.name}
                  id={`desktop-menu-${sectionIdx}`}
                  className="relative inline-block text-left"
                >
                  <div>
                    <Popover.Button className="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                      <span>{section.name}</span>
                      {/* {sectionIdx === 0 ? (
                        <span className="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
                          1
                        </span>
                      ) : null} */}
                      <ChevronDownIcon
                        className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute z-10 w-40 p-4 mt-2 origin-top-right bg-white rounded-md shadow-2xl md:right-0 -right-1/2 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center cursor">
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              onClick={() => {
                                setTag(option.value)
                                setCategory(option.label)
                                setOpen(false)
                              }}
                              className={`pr-6 ml-3 text-sm font-medium text-gray-900 cursor-pointer whitespace-nowrap ${tag === option.value ? "font-bold text-black" : ""}`}
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
            </Popover.Group>
          </div>
          <p className='text-xl font-semibold text-gray-900'>{category}</p>
        </section>
      </div>
    </div>
  )
}
