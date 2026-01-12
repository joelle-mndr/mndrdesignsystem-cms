import React, { useState, useRef, useCallback } from 'react';

import './searchfield.css';

export interface SearchFieldProps {
  /** Placeholder text shown when field is empty */
  placeholder?: string;
  /** Current value of the search field */
  value?: string;
  /** Callback fired when the value changes */
  onChange?: (value: string) => void;
  /** Callback fired when the clear button is clicked */
  onClear?: () => void;
  /** Callback fired when the field is focused */
  onFocus?: () => void;
  /** Callback fired when the field loses focus */
  onBlur?: () => void;
  /** Width of the search field */
  width?: string | number;
  /** Disable the search field */
  disabled?: boolean;
}

/** Search input field with multiple visual states */
export const SearchField = ({
  placeholder = 'Search by name, NRIC, test name',
  value: controlledValue,
  onChange,
  onClear,
  onFocus,
  onBlur,
  width = 320,
  disabled = false,
}: SearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Support both controlled and uncontrolled modes
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasValue = value.length > 0;

  // Determine the visual state
  const getStateClass = () => {
    if (hasValue && !isFocused) return 'search-field--active';
    if (hasValue && isFocused) return 'search-field--typing';
    if (isFocused) return 'search-field--focussed';
    return '';
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  const handleClear = useCallback(() => {
    if (!isControlled) {
      setInternalValue('');
    }
    onClear?.();
    onChange?.('');
    inputRef.current?.focus();
  }, [isControlled, onChange, onClear]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <div
      className={`search-field ${getStateClass()}`}
      style={containerStyle}
    >
      {/* Search Icon */}
      <div className={`search-field__icon ${hasValue || isFocused ? 'search-field__icon--active' : 'search-field__icon--muted'}`}>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 14L10.5 10.5M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Input Container */}
      <div className="search-field__input-container">
        <input
          ref={inputRef}
          type="text"
          className="search-field__input"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          aria-label="Search"
        />
      </div>

      {/* Clear Button */}
      <button
        type="button"
        className={`search-field__clear ${!hasValue ? 'search-field__clear--hidden' : ''}`}
        onClick={handleClear}
        tabIndex={-1}
        aria-label="Clear search"
      >
        <svg
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7M1 7L7 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

