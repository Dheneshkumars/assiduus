import React, { useState } from 'react';

const DropDown = (props) => {
    const { selected, option } = props.data;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown px-1">
            <select
                className="form-control fs-normal form-select shadow-none"
            >
                <option>{selected}</option>
                {option &&
                    Array.isArray(option) &&
                    option.map((data, i) => {
                        return <option key={i}>{data}</option>;
                    })}
            </select>
        </div>
    );
}

export default DropDown;
