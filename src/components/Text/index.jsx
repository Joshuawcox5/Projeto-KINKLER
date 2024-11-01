import React from "react";

const sizes = {
    single_line_body_base: "text-[16px] font-normal not-italic",
    body_base: "text-[16px] font-normal",
    textxs: "text-[16px] font-normal not-italic",
    texts: "text-[36px] font-normal not-italic md:text-[34px] sm:text-[32px]",
};

const Text = ({ children, className = "", as, size = "body_base", ...restProps }) => {
    const Components = as || "p";

    return (
        <Components className={`font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Components>
    );
};

export { Text };