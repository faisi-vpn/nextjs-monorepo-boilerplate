import React from "react";
import "./Typography.scss";
import clsx from "classnames";

type TitlePropsType = {
	size?: "xs" | "sm" | "lg" | "md" | "xl" | "2xl";
	fontWeight?: "bold" | "semibold" | "medium" | "regular";
	isTruncated?: boolean;
	children: React.ReactNode;
} & React.ComponentPropsWithRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

type TextPropsType = {
	size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
	fontWeight?: "bold" | "semibold" | "medium" | "regular";
	children: React.ReactNode;
	isTruncated?: boolean;
} & React.ComponentPropsWithRef<"p">;

export const Title = ({
	size = "lg",
	children,
	fontWeight = "medium",
	className,
	isTruncated,
	...props
}: TitlePropsType) => {
	const textComponents = [
		{
			id: 1,
			size: "2xl",
			children: (
				<h1
					className={clsx("typography__title_h1", fontWeight, className, "xlxl", {
						"typography__single-line": isTruncated,
					})}
					{...props}
				>
					{children}
				</h1>
			),
		},
		{
			id: 2,
			size: "xl",
			children: (
				<h2
					className={clsx("typography__title_h2", fontWeight, className, "xl", {
						"typography__single-line": isTruncated,
					})}
					{...props}
				>
					{children}
				</h2>
			),
		},
		{
			id: 3,
			size: "lg",
			children: (
				<h3
					className={clsx("typography__title_h3", fontWeight, className, "lg", {
						"typography__single-line": isTruncated,
					})}
					{...props}
				>
					{children}
				</h3>
			),
		},
		{
			id: 4,
			size: "md",
			children: (
				<h4
					className={clsx("typography__title_h4", fontWeight, className, "md", {
						"typography__single-line": isTruncated,
					})}
					{...props}
				>
					{children}
				</h4>
			),
		},
		{
			id: 5,
			size: "sm",
			children: (
				<h5
					className={clsx("typography__title_h5", fontWeight, className, "sm", {
						"typography__single-line": isTruncated,
					})}
					{...props}
				>
					{children}
				</h5>
			),
		},
		{
			id: 6,
			size: "xs",
			children: (
				<h6
					className={clsx("typography__title_h6", fontWeight, className, "xs", {
						"typography__single-line": isTruncated,
					})}
					{...props}
				>
					{children}
				</h6>
			),
		},
	];

	return textComponents.find((component) => component.size === size)?.children;
};

export const Text = ({
	fontWeight = "regular",
	className,
	size = "md",
	children,
	isTruncated,
	...props
}: TextPropsType) => {
	return (
		<p
			className={clsx("typography__text", size, fontWeight, className, {
				"typography__single-line": isTruncated,
			})}
			{...props}
		>
			{children}
		</p>
	);
};

const Typography = {
	Title,
	Text,
};

export default Typography;