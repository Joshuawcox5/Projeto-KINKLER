import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-lg"
};
const variants = {
    tarOutlineGray90013: "!border-gray-900_13 border -[0.5px] border-solid bg-gray-200",
};
const sizes = {
    xs: "h-[80px] p-3.5 text-[16px]",
};

const TextArea = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            onChange,
            shape,
            variant = "tarOutlineGray90013",
            size = "xs",
            ...restProps
        },
        ref,
) => {
        const handleChange = (e) => {
            if (onChange) onChange (e?.target?.value);
        };
        
        return (
            <textarea
            ref={ref}
            classname={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
            />
        );
    },
);

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["tarOutlineGray90013"]),
};

export { TextArea };