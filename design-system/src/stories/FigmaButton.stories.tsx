import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { FigmaButton } from './FigmaButton';

/**
 * Button component from Figma Design System
 * 
 * This button matches the exact specifications from Figma:
 * - Border radius: 4px
 * - Padding: 12px horizontal, 4px vertical
 * - Height: 32px
 * - Font size: 14px
 * - Font weight: 600 (Semibold)
 * - Gap: 8px between icon and text
 */
const meta = {
  title: 'Design System/FigmaButton',
  component: FigmaButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component matching Figma design specifications with exact border-radius (4px) and padding (12px horizontal, 4px vertical).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary-outline', 'secondary', 'tertiary', 'text'],
      description: 'Button type variant',
    },
    theme: {
      control: 'radio',
      options: ['brand', 'ai'],
      description: 'Theme variant',
    },
    destructive: {
      control: 'boolean',
      description: 'Destructive state for error actions',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show leading icon',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show trailing icon',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
  },
  args: { 
    onClick: fn(),
    label: 'Button Label',
  },
} satisfies Meta<typeof FigmaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========================================
// PRIMARY BUTTONS - BRAND THEME
// ========================================

export const PrimaryBrand: Story = {
  args: {
    type: 'primary',
    theme: 'brand',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const PrimaryBrandNoIcons: Story = {
  args: {
    type: 'primary',
    theme: 'brand',
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const PrimaryBrandDestructive: Story = {
  args: {
    type: 'primary',
    theme: 'brand',
    destructive: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const PrimaryBrandDisabled: Story = {
  args: {
    type: 'primary',
    theme: 'brand',
    disabled: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// PRIMARY BUTTONS - AI THEME
// ========================================

export const PrimaryAI: Story = {
  args: {
    type: 'primary',
    theme: 'ai',
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// SECONDARY OUTLINE BUTTONS - BRAND
// ========================================

export const SecondaryOutlineBrand: Story = {
  args: {
    type: 'secondary-outline',
    theme: 'brand',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const SecondaryOutlineBrandNoIcons: Story = {
  args: {
    type: 'secondary-outline',
    theme: 'brand',
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const SecondaryOutlineBrandDestructive: Story = {
  args: {
    type: 'secondary-outline',
    theme: 'brand',
    destructive: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const SecondaryOutlineBrandDisabled: Story = {
  args: {
    type: 'secondary-outline',
    theme: 'brand',
    disabled: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// SECONDARY OUTLINE BUTTONS - AI THEME
// ========================================

export const SecondaryOutlineAI: Story = {
  args: {
    type: 'secondary-outline',
    theme: 'ai',
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// SECONDARY BUTTONS - BRAND
// ========================================

export const SecondaryBrand: Story = {
  args: {
    type: 'secondary',
    theme: 'brand',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const SecondaryBrandNoIcons: Story = {
  args: {
    type: 'secondary',
    theme: 'brand',
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const SecondaryBrandDestructive: Story = {
  args: {
    type: 'secondary',
    theme: 'brand',
    destructive: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const SecondaryBrandDisabled: Story = {
  args: {
    type: 'secondary',
    theme: 'brand',
    disabled: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// SECONDARY BUTTONS - AI THEME
// ========================================

export const SecondaryAI: Story = {
  args: {
    type: 'secondary',
    theme: 'ai',
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// TERTIARY BUTTONS - BRAND
// ========================================

export const TertiaryBrand: Story = {
  args: {
    type: 'tertiary',
    theme: 'brand',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const TertiaryBrandNoIcons: Story = {
  args: {
    type: 'tertiary',
    theme: 'brand',
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const TertiaryBrandDestructive: Story = {
  args: {
    type: 'tertiary',
    theme: 'brand',
    destructive: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const TertiaryBrandDisabled: Story = {
  args: {
    type: 'tertiary',
    theme: 'brand',
    disabled: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// TERTIARY BUTTONS - AI THEME
// ========================================

export const TertiaryAI: Story = {
  args: {
    type: 'tertiary',
    theme: 'ai',
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// TEXT BUTTONS - BRAND
// ========================================

export const TextBrand: Story = {
  args: {
    type: 'text',
    theme: 'brand',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const TextBrandNoIcons: Story = {
  args: {
    type: 'text',
    theme: 'brand',
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const TextBrandDestructive: Story = {
  args: {
    type: 'text',
    theme: 'brand',
    destructive: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const TextBrandDisabled: Story = {
  args: {
    type: 'text',
    theme: 'brand',
    disabled: true,
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// TEXT BUTTONS - AI THEME
// ========================================

export const TextAI: Story = {
  args: {
    type: 'text',
    theme: 'ai',
    leadingIcon: true,
    trailingIcon: true,
  },
};

// ========================================
// INTERACTIVE PLAYGROUND
// ========================================

export const Playground: Story = {
  args: {
    type: 'primary',
    theme: 'brand',
    destructive: false,
    disabled: false,
    leadingIcon: true,
    trailingIcon: true,
    label: 'Button Label',
  },
};
