/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { classNames } from 'utils';
import { SelectOptionType } from 'utils/types';

type PropsType = {
    className?: string;
    value: string;
    options: SelectOptionType[];
    placeholder?: string;
    onChange: (value: string) => void;
};

const Select = ({ value, options, onChange, placeholder = 'Select...' }: PropsType) => {
    const [selectedValue, selectValue] = useState<string>(value);
    useEffect(() => {
        selectValue(value as string);
    }, [value]);

    return (
        <div className="w-full relative">
            <Listbox
                value={selectedValue}
                onChange={(value) => {
                    selectValue(value);
                    if (onChange) onChange(value);
                }}
            >
                <Listbox.Button
                    className={classNames(
                        'bg-white relative w-full min-h-10 border border-gray-300 rounded-md shadow-sm pl-3',
                        'pr-10 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm cursor-pointer',
                        'focus:border-emerald-600 focus:ring-emerald-600'
                    )}
                >
                    <span className={`block truncate capitalize ${selectedValue ? 'text-gray-700' : 'text-gray-300'}`}>
                        {options.find((option) => option.value === `${selectedValue}`)?.label || placeholder}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        static
                        className={`w-full absolute mt-1 z-10 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
                    >
                        {options.map((option, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    classNames(
                                        active ? 'text-white bg-emerald-600' : 'text-gray-900',
                                        'select-none relative py-2 pl-3 pr-9 cursor-pointer'
                                    )
                                }
                                value={option.value}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            className={`${
                                                active || selected ? 'font-semibold' : 'font-normal'
                                            } block truncate capitalize`}
                                        >
                                            {option.label}
                                        </span>

                                        {selected ? (
                                            <span
                                                className={`${
                                                    active ? 'text-white' : 'text-emerald-600'
                                                } absolute inset-y-0 right-0 flex items-center pr-4`}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
};

export default Select;
