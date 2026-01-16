import { twMerge } from "tailwind-merge";
import { LoadingIcon } from "../Loading";

type ButtonProps = {
  className?: string;
  textClassName?: string;
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  className,
  textClassName,
  text,
  disabled,
  loading,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'w-full py-2 px-4 flex items-center min-h-11 gap-2 bg-[#173EA5] rounded-full cursor-pointer relative',
        className,
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      <div className="size-5" />

      <div className="flex-1">
        <span className={twMerge('text-white text-sm font-medium', textClassName)}>
          {text}
        </span>
      </div>

      <div className="size-5">
        {disabled || loading && (
          <>
            <div className="absolute inset-0 bg-black/35 rounded-full" />

            <LoadingIcon className="size-5" />
          </>
        )}
      </div>
    </button>
  );
}

export default Button;
