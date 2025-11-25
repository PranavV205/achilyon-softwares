import React, { ReactNode } from "react";

type ContainerVariant = "primary" | "secondary" | "tertiary"

interface ContainerProps {
    variant: ContainerVariant
    children: ReactNode
}

function Container({ variant, children }: ContainerProps) {
    return (
        <div
            className={`p-4 md:p-10 
                ${variant === "primary"
                    ? "bg-[#E8E2F2]"
                    : variant === "secondary"
                        ? "bg-[#F6F4F1]"
                        : "bg-[#FFFFFF]"
                }`}
        >
            {children}
        </div>

    );
}

export default Container;
