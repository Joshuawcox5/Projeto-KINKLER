import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-lg",
};
const variants = {
    fill: {
        blue_gray_900_01: "bg-blue text-gray-100",
        deep_purple_500: "bg-deep_purple-500 text-gray-100",
        blue_600: "bg-blue-600 text-white",
    },
};
const sizes = {
    xs: "h-[32px] px-1 text-[16px]",
    sm: "h-[40px] px-[34px] text-[16px]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "sm",
    color = "blue_gray_900_01",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-gray-100 text-[16px] border border-solid ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs", "sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["blue_gray_900_01", "deep_purple_500", "blue_600"]), // Adicionei 'blue_600'
};

export { Button };
