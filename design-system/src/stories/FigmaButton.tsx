import React from 'react';
import './figmaButton.css';
import './theme.css';

export interface FigmaButtonProps {
  /** Button type variant */
  type?: 'primary' | 'secondary-outline' | 'secondary' | 'tertiary' | 'text';
  /** Theme variant */
  theme?: 'brand' | 'ai';
  /** Destructive state */
  destructive?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show leading icon */
  leadingIcon?: boolean;
  /** Show trailing icon */
  trailingIcon?: boolean;
  /** Custom leading icon element */
  customLeadingIcon?: React.ReactNode;
  /** Custom trailing icon element */
  customTrailingIcon?: React.ReactNode;
  /** Button label text */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Icon component for leading/trailing icons */
const CirclePlusIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M8 5.5V10.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M5.5 8H10.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/** Figma Button component matching design system specifications */
export const FigmaButton = ({
  type = 'primary',
  theme = 'brand',
  destructive = false,
  disabled = false,
  leadingIcon = false,
  trailingIcon = false,
  customLeadingIcon,
  customTrailingIcon,
  label,
  onClick,
  ...props
}: FigmaButtonProps) => {
  // Build class names based on props
  const classNames = [
    'figma-button',
    `figma-button--${type}`,
    `figma-button--${theme}`,
    destructive && 'figma-button--destructive',
    disabled && 'figma-button--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const showLeadingIcon = leadingIcon && (type === 'primary' || type === 'secondary-outline' || type === 'secondary' || type === 'tertiary' || type === 'text');
  const showTrailingIcon = trailingIcon && (type === 'primary' || type === 'secondary-outline' || type === 'secondary' || type === 'tertiary' || type === 'text');

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {showLeadingIcon && (
        <span className="figma-button__icon">
          {customLeadingIcon || <CirclePlusIcon className="figma-button__icon-svg" />}
        </span>
      )}
      <span className="figma-button__label">{label}</span>
      {showTrailingIcon && (
        <span className="figma-button__icon">
          {customTrailingIcon || <CirclePlusIcon className="figma-button__icon-svg" />}
        </span>
      )}
    </button>
  );
};
