import { twMerge } from "tailwind-merge";

type LoadingIconProps = {
  className?: string;
}

type LoadingProps = {
  className?: string;
  iconClassName?: string;
}

export const LoadingIcon = ({ className }: LoadingIconProps) => {
  return (
    <img
      src="/assets/Loading.svg"
      className={twMerge('object-contain animate-spin', className)}
    />
  )
}

const Loading = ({ className, iconClassName }: LoadingProps) => {
  return (
    <div className={twMerge('flex items-center justify-center', className)}>
      <LoadingIcon className={iconClassName} />
    </div>
  )
}

export default Loading;
