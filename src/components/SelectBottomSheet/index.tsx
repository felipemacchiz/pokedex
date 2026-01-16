import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer } from 'vaul';
import ChevronDownIcon from '../ChevronDownIcon';

export type SelectOption = {
  value: string;
  label: string;
  className?: string;
  labelClassName?: string;
}

type SelectBottomSheetProps = {
  placeholder?: string;
  title?: string;
  options: SelectOption[];
  selectedOption?: SelectOption;
  setSelectedOption?: (option: SelectOption) => void;
}

const SelectBottomSheet = ({
  placeholder,
  title,
  options,
  selectedOption,
  setSelectedOption,
}: SelectBottomSheetProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: SelectOption) => {
    setSelectedOption?.(option);
    setOpen(false);
  }

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(value) => setOpen(value)}
    >
      <Drawer.Trigger asChild>
        <button
          className={twMerge(
            'w-full py-2 px-4 flex items-center min-h-11 gap-2 bg-pk-gray-800 rounded-full cursor-pointer',
            selectedOption?.className,
          )}
        >
          <div className="flex-1">
            <span className={twMerge('text-white text-sm font-medium', selectedOption?.labelClassName)}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>

          <ChevronDownIcon
            className={twMerge(
              'text-white',
              selectedOption?.labelClassName,
            )}
          />
        </button>
      </Drawer.Trigger>


      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content
          className="bg-white rounded-t-2xl fixed bottom-0 left-0 right-0 outline-none flex flex-col max-h-[90dvh]"
          aria-describedby=''
        >
          <div className='p-4 flex flex-col gap-4'>
            <Drawer.Handle />

            <Drawer.Title className="text-base font-medium text-center">
              {title}
            </Drawer.Title>
          </div>

          <div className='flex flex-col gap-3 overflow-y-auto p-4 pt-0'>
            {options.map((option) => (
              <button
                key={option.value}
                className={twMerge(
                  'w-full py-2 px-4 flex items-center justify-center min-h-11 gap-2 bg-pk-gray-800 rounded-full cursor-pointer',
                  option.className
                )}
                onClick={() => handleSelect(option)}
              >
                <span className={twMerge('text-white text-sm', option.labelClassName)}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default SelectBottomSheet;
