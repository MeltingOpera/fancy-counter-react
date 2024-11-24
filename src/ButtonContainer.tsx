interface CountButtonsProps {
  children: React.ReactNode;
}

export default function ButtonContainer({ children }: CountButtonsProps) {
  return <div className="button-container">{children}</div>;
}
