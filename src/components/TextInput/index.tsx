import { useRef, type JSX } from "react";

type TextInputProps = {
  LeftIcon?: JSX.Element;
  RightIcon?: JSX.Element;
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const TextInput = ({
  LeftIcon,
  RightIcon,
  placeholder,
  value,
  defaultValue,
  onChange,
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="w-full min-h-12 px-4 py-3.5 rounded-full border border-pk-gray-200 flex items-center gap-2"
      onClick={() => inputRef.current?.focus()}
    >
      {LeftIcon}

      <input
        ref={inputRef}
        placeholder={placeholder}
        className="outline-none text-pk-gray-700 placeholder:text-pk-gray-400 flex-1"
        value={value}
        defaultValue={defaultValue}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
      />

      {RightIcon}
    </div>
  );
}

export default TextInput;
