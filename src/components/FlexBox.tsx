import clsx from "clsx";
import React from "react";

type TDirection = "row" | "column" | "row-reverse" | "column-reverse";
type TJustifyContent =
  | "justify-between"
  | "justify-normal"
  | "justify-start"
  | "justify-end"
  | "justify-center";
type TAlignItems =
  | "items-start"
  | "items-end"
  | "items-center"
  | "items-baseline"
  | "items-stretch";

const directions: Record<TDirection, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};

const justifyContents: Record<TJustifyContent, string> = {
  "justify-between": "justify-between",
  "justify-center": "justify-center",
  "justify-end": "justify-end",
  "justify-normal": "justify-normal",
  "justify-start": "justify-start",
};

const alignItems: Record<TAlignItems, string> = {
  "items-start": "items-start",
  "items-end": "items-end",
  "items-center": "items-center",
  "items-baseline": "items-baseline",
  "items-stretch": "items-stretch",
};

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: TDirection;
  rowGap?: number;
  columnGap?: number;
  justifyContent?: TJustifyContent;
  alignItem?: TAlignItems;
  flexBasis?: string;
  flex?: number;
}
const FlexBox = ({
  direction = "row",
  flex,
  rowGap,
  columnGap,
  className,
  justifyContent = "justify-normal",
  alignItem = "items-baseline",
  flexBasis = "100%",
  children,
  style,
  ...props
}: FlexBoxProps) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        directions[direction],
        justifyContents[justifyContent],
        alignItems[alignItem],
        "flex w-full"
      )}
      style={{
        ...style,
        flex: flex,
        flexBasis: flexBasis,
        rowGap: rowGap ? `${rowGap}px` : undefined,
        columnGap: columnGap ? `${columnGap}px` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
