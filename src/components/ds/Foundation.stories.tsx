import type { Meta, StoryObj } from '@storybook/react';

/**
 * Design tokens are defined in `tailwind.config.mjs` and shared by the Astro site and Storybook.
 * This page documents the current theme values for reference.
 */
const meta: Meta = {
  title: 'Design System/Foundation',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tokens are sourced from Tailwind config. Use Tailwind classes (e.g. `bg-accent`, `text-accent`) in components.',
      },
    },
  },
};

export default meta;

const colors = [
  { name: 'Accent', token: 'accent', value: '#53B880', usage: 'CTAs, links, highlights' },
  { name: 'Surface', token: 'surface', value: '#F7F6F3', usage: 'Background' },
];

const typography = [
  { name: 'Font family', value: 'Inter, system-ui, sans-serif' },
  { name: 'Prose max-width', value: '65ch' },
  { name: 'Content max-width', value: '1000px' },
];

function FoundationTokens() {
  return (
    <div className="space-y-10 font-sans">
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Colors</h2>
        <div className="flex flex-wrap gap-6">
          {colors.map(({ name, token, value, usage }) => (
            <div key={token} className="space-y-2">
              <div
                className="w-24 h-24 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                style={{ backgroundColor: value }}
              />
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{token}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{usage}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Typography & layout
        </h2>
        <table className="min-w-[320px] text-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100">Token</th>
              <th className="text-left p-3 font-medium text-gray-900 dark:text-gray-100">Value</th>
            </tr>
          </thead>
          <tbody>
            {typography.map(({ name, value }) => (
              <tr key={name} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-3 text-gray-700 dark:text-gray-300">{name}</td>
                <td className="p-3 text-gray-600 dark:text-gray-400 font-mono text-xs">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export const Tokens: StoryObj = {
  render: () => <FoundationTokens />,
};
