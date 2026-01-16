import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type NotFoundProps = {
  className?: string;
}

const NotFound = ({ className, children }: PropsWithChildren<NotFoundProps>) => {
  return (
    <div className={twMerge('h-full flex flex-col items-center justify-center gap-4', className)}>
      <div className="flex items-center justify-center gap-2">
        <img src="/assets/Pokeball.svg" />

        <p className="text-base text-black/40">
          Ops! Nenhum pokémon foi encontrado...
        </p>
      </div>

      {children}
    </div>
  );
}

export default NotFound;
