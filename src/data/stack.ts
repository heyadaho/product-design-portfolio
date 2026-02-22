/**
 * Stack / tools page data.
 *
 * Icons:
 * - For web/app logos by domain: we use Google favicon (no API key).
 *   Alternative: Logo.dev — https://img.logo.dev/{domain}?token=YOUR_KEY (see https://logo.dev)
 * - For macOS app icons: macOSicons API — https://docs.macosicons.com/ (search by app name)
 * - Or add images to public/images/stack/ and set icon to /images/stack/name.png
 */

export type Platform = 'macOS' | 'iOS' | 'Web' | 'Windows' | 'Physical';

export interface StackItem {
  name: string;
  description: string;
  platforms: Platform[];
  /** Optional link (product or company site). */
  link?: string;
  /**
   * Icon: domain (e.g. "figma.com") for favicon, or full URL (e.g. /images/stack/figma.png).
   * Leave empty for no icon.
   */
  icon?: string;
  /** Likes count (display only; set for sorting or future interactivity). */
  likes?: number;
}

export const stackItems: StackItem[] = [
  {
    name: 'Figma',
    description: 'Design and prototyping for product and UI work.',
    platforms: ['macOS', 'Web'],
    link: 'https://figma.com',
    icon: 'figma.com',
    likes: 6,
  },
  {
    name: 'Astro',
    description: 'Fast static sites with content collections and islands.',
    platforms: ['Web'],
    link: 'https://astro.build',
    icon: 'astro.build',
    likes: 4,
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS for consistent, fast styling.',
    platforms: ['Web'],
    link: 'https://tailwindcss.com',
    icon: 'tailwindcss.com',
    likes: 7,
  },
  {
    name: 'VS Code',
    description: 'Primary editor for code and content.',
    platforms: ['macOS', 'Windows'],
    link: 'https://code.visualstudio.com',
    icon: 'code.visualstudio.com',
    likes: 5,
  },
  {
    name: 'GitHub',
    description: 'Repos, pull requests, and project coordination.',
    platforms: ['Web', 'macOS', 'iOS'],
    link: 'https://github.com',
    icon: 'github.com',
    likes: 8,
  },
  {
    name: 'Notion',
    description: 'Notes, docs, and project organization.',
    platforms: ['Web', 'macOS', 'iOS'],
    link: 'https://notion.so',
    icon: 'notion.so',
    likes: 3,
  },
  {
    name: '1Password',
    description: 'Passwords and secrets.',
    platforms: ['macOS', 'iOS', 'Web'],
    link: 'https://1password.com',
    icon: '1password.com',
    likes: 5,
  },
  {
    name: 'Linear',
    description: 'Issue tracking and product roadmap.',
    platforms: ['Web', 'macOS'],
    link: 'https://linear.app',
    icon: 'linear.app',
    likes: 4,
  },
];
