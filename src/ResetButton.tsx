import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({
  setCount,
}: {
  setCount: (count: number) => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
    e.currentTarget.blur();
  };

  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
