import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';

import { SearchField } from './SearchField';

const meta = {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when field is empty',
    },
    value: {
      control: 'text',
      description: 'Current value of the search field',
    },
    width: {
      control: { type: 'number' },
      description: 'Width of the search field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the search field',
    },
  },
  args: {
    onChange: fn(),
    onClear: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default state with placeholder text visible */
export const Default: Story = {
  args: {
    placeholder: 'Search by name, NRIC, test name',
  },
};

/** Focused state - shows the blue border and focus ring */
export const Focused: Story = {
  args: {
    placeholder: 'Search by name, NRIC, test name',
  },
  parameters: {
    pseudo: { focus: true },
  },
  render: (args) => {
    return (
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Click inside the field to see the focused state
        </p>
        <SearchField {...args} />
      </div>
    );
  },
};

/** Typing state - shows text being entered with cursor */
export const Typing: Story = {
  args: {
    value: 'Search text',
    placeholder: 'Search by name, NRIC, test name',
  },
  render: (args) => {
    return (
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Click inside to focus and see typing state
        </p>
        <SearchField {...args} />
      </div>
    );
  },
};

/** Active state - has a value but is not focused */
export const Active: Story = {
  args: {
    placeholder: 'Search by name, NRIC, test name',
  },
  render: (args) => {
    const [value, setValue] = useState('Search text');
    return (
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Field with value but not focused (click outside after typing)
        </p>
        <SearchField
          {...args}
          value={value}
          onChange={setValue}
          onClear={() => setValue('')}
        />
      </div>
    );
  },
};

/** Custom width demonstration */
export const CustomWidth: Story = {
  args: {
    placeholder: 'Search...',
    width: 400,
  },
};

/** Disabled state */
export const Disabled: Story = {
  args: {
    placeholder: 'Search is disabled',
    disabled: true,
  },
};

/** Interactive example with full functionality */
export const Interactive: Story = {
  args: {
    placeholder: 'Type to search...',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    const [log, setLog] = useState<string[]>([]);

    const addLog = (message: string) => {
      setLog((prev) => [...prev.slice(-4), message]);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SearchField
          {...args}
          value={value}
          onChange={(v) => {
            setValue(v);
            addLog(`onChange: "${v}"`);
          }}
          onClear={() => {
            setValue('');
            addLog('onClear');
          }}
          onFocus={() => addLog('onFocus')}
          onBlur={() => addLog('onBlur')}
        />
        <div
          style={{
            padding: '12px',
            background: '#f5f5f5',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '12px',
            minHeight: '80px',
          }}
        >
          <strong>Event Log:</strong>
          {log.map((entry, i) => (
            <div key={i} style={{ color: '#666' }}>
              {entry}
            </div>
          ))}
        </div>
      </div>
    );
  },
};

