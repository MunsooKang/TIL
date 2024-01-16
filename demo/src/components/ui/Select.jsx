// Select.js
import React, { useState, useRef, useEffect } from "react";

export function Select({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (triggerRef.current && !triggerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="select">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, setIsOpen, triggerRef })
      )}
    </div>
  );
}

export function SelectTrigger({ children, id }) {
  return <div id={id}>{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <div className="select-value">{placeholder}</div>;
}

export function SelectContent({ children, position }) {
  return (
    <div className={`select-content ${position}`}>
      {children}
    </div>
  );
}

export function SelectItem({ value, children }) {
  return <div className="select-item" data-value={value}>{children}</div>;
}
