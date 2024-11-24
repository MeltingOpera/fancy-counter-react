import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

interface CountButtonsProps {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setCount: Function;
  type: string;
  locked: boolean;
}

export default function CountButton({
  setCount,
  type,
  locked,
}: CountButtonsProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev: number) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });
    e.currentTarget?.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
