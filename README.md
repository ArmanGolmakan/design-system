# design-system

Accessible React component library built with TypeScript, react-aria-components, and Tailwind. WCAG 2.1 AA compliant, documented with Storybook, and tested with Chromatic.

## Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| TypeScript | 5.9 | Type safety |
| react-aria-components | 1.16 | Accessible component primitives |
| Tailwind CSS | 4 | Utility-first styling |
| Storybook | 10 | Component documentation & visual testing |
| Vite | 8 | Build tool |
| Vitest | 4 | Unit & interaction testing |
| Chromatic | 15 | Visual regression testing & UI review |

## Components

| Component | Description | States |
|---|---|---|
| **Button** | General-purpose action button | `primary`, `secondary`, `destructive` · `sm/md/lg` · `disabled` |
| **TextField** | Labelled text input | `default`, `required`, `error`, `disabled`, `read-only` |
| **Checkbox** | Single checkbox | `checked`, `indeterminate`, `invalid`, `disabled` |
| **Modal** | Dialog overlay | `dialog`, `alertdialog` · `sm/md/lg/xl/full` · `isDismissable` |
| **Select** | Dropdown select with listbox | `default`, `required`, `error`, `disabled` · per-item disabled |

All components follow the same patterns:

- Built on `react-aria-components` primitives for keyboard navigation, focus management, and ARIA attributes
- Styled with Tailwind CSS data-attribute selectors (`data-hovered:`, `data-focus-visible:`, `data-disabled:`, etc.)
- Typed with TypeScript interfaces that extend the underlying Aria component props
- Each component ships with a Storybook story file (`.stories.tsx`) and an MDX documentation page (`.mdx`)

## Getting started

```bash
npm install
npm run storybook    # dev server at http://localhost:6006
```

## Scripts

```bash
npm run dev            # Vite dev server
npm run build          # Production build
npm run storybook      # Storybook dev server (port 6006)
npm run build-storybook  # Static Storybook build
npm run lint           # ESLint
```

## Visual testing with Chromatic

Every Storybook story is automatically captured by [Chromatic](https://www.chromatic.com/). Run a manual build with:

```bash
npx chromatic --project-token=<your-token>
```

Chromatic compares snapshots against the accepted baseline and flags visual regressions for review before merge. The `@chromatic-com/storybook` addon is pre-configured in `.storybook/main.ts`.

## Project structure

```
src/
└── components/
    ├── Button/
    │   ├── Button.tsx
    │   ├── Button.stories.tsx
    │   ├── Button.mdx
    │   └── index.ts
    ├── TextField/
    │   ├── TextField.tsx
    │   ├── TextField.stories.tsx
    │   ├── TextField.mdx
    │   └── index.ts
    ├── Checkbox/
    │   ├── Checkbox.tsx
    │   ├── Checkbox.stories.tsx
    │   ├── Checkbox.mdx
    │   └── index.ts
    ├── Modal/
    │   ├── Modal.tsx
    │   ├── Modal.stories.tsx
    │   ├── Modal.mdx
    │   └── index.ts
    └── Select/
        ├── Select.tsx
        ├── Select.stories.tsx
        ├── Select.mdx
        └── index.ts
```

## Accessibility

All components target **WCAG 2.1 AA** compliance. The `@storybook/addon-a11y` addon surfaces axe-core violations in the Storybook UI. The a11y test mode is set to `'todo'` by default — change it to `'error'` in `.storybook/preview.ts` to fail CI on violations.
