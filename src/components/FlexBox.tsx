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

const alignItemsClass: Record<TAlignItems, string> = {
  "items-start": "items-start",
  "items-end": "items-end",
  "items-center": "items-center",
  "items-baseline": "items-baseline",
  "items-stretch": "items-stretch",
};

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: TDirection;
  rowGap?: string;
  columnGap?: string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  flex?: number;
}
const FlexBox = ({
  direction = "row",
  flex,
  rowGap,
  columnGap,
  className,
  justifyContent = "justify-normal",
  alignItems = "items-baseline",
  children,
  ...props
}: FlexBoxProps) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        directions[direction],
        justifyContents[justifyContent],
        alignItemsClass[alignItems],
        "flex w-[100%]",
        flex ? `flex-[${flex}]` : "",
        columnGap ? `gap-x-[${columnGap}]` : "",
        rowGap ? `gap-y-[${rowGap}]` : ""
      )}
    >
      {children}
    </div>
  );
};

export default FlexBox;
