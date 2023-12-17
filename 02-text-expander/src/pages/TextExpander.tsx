import { useState } from "react";

export const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#00e",
  expanded = false,
  className,
  children,
}: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const btnStyle = {
    border: "none",
    outline: "none",
    cursor: "pointer",
    marginLeft: "6px",
    background: "inherit",
    color: buttonColor,
  };

  return (
    <div className={className}>
      {displayText}
      <button
        style={btnStyle}
        onClick={() => setIsExpanded((exp: any) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};
