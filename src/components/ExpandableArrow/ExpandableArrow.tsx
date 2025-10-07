import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './ExpandableArrow.css';
import { expandableArrowSizes } from './ExpandableArrow.styles';
import { ExpandableArrowSize } from './ExpandableArrowTypes';

export interface ExpandableArrowProps {
  isExpanded?: boolean;
  // eslint-disable-next-line no-unused-vars
  onToggle?: (isExpanded: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  size?: ExpandableArrowSize;
  color?: string;
  disabled?: boolean;
  direction?: 'up' | 'down';
  isVisible?: boolean;
  delay?: number;
}

export const ExpandableArrow: React.FC<ExpandableArrowProps> = ({
  isExpanded: externalIsExpanded,
  onToggle: externalOnToggle,
  className = '',
  style = {},
  size = ExpandableArrowSize.Medium,
  color = '#ffffff',
  disabled = false,
  direction = 'down',
  isVisible = true,
  delay = 0,
}) => {
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);

  const isExpanded =
    externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;

  const handleToggle = useCallback(() => {
    if (disabled) return;

    const newExpandedState = !isExpanded;

    if (externalOnToggle) {
      externalOnToggle(newExpandedState);
    } else {
      setInternalIsExpanded(newExpandedState);
    }
  }, [isExpanded, externalOnToggle, disabled]);

  const arrowClasses = [
    'expandable-arrow',
    `expandable-arrow--${direction}`,
    isExpanded ? 'expandable-arrow--expanded' : 'expandable-arrow--collapsed',
    disabled ? 'expandable-arrow--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sizeStyles =
    expandableArrowSizes[size] ||
    expandableArrowSizes[ExpandableArrowSize.Medium];

  return (
    <motion.button
      className={arrowClasses}
      style={{ ...style, ...sizeStyles, color }}
      onClick={handleToggle}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      aria-label={isExpanded ? 'Collapse' : 'Expand'}
      role="button"
      tabIndex={disabled ? -1 : 0}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: delay }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="expandable-arrow__icon"
        animate={{
          rotate: isExpanded ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        <path
          d="M7 14L12 9L17 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  );
};

export default ExpandableArrow;
