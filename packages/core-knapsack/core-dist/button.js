import { jsx as _jsx } from "react/jsx-runtime";
// Definition of sizes and types
const sizes = {
    small: 'text-sm shadow-sm px-2 py-1',
    medium: 'px-4 py-2',
    large: 'px-6 py-3',
};
const types = {
    primary: 'bg-indigo-600 hover:bg-indigo-500',
    secondary: 'bg-gray-600 hover:bg-gray-500',
};
export const Button = ({ children, type = 'primary', size = 'medium', }) => {
    const buttonClasses = [
        'rounded',
        'font-semibold',
        'text-white',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        sizes[size],
        types[type],
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("button", { className: buttonClasses, type: "button", children: children }));
};
