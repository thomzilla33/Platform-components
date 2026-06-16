# AIMS OS Design System

> This file is the AI-readable reference for the AIMS OS component library.
> Any AI agent (Claude, Cursor, Copilot) should read this file AND `figma-mapping.json` before generating UI code.

## Quick Start

```tsx
// 1. Import styles (once, at app root)
import '@aims/platform-components/styles'

// 2. Import components
import { Button, Input, Tag, Modal } from '@aims/platform-components'

// 3. Import tokens (optional, for custom components)
import { colors, semantic, typography, spacing } from '@aims/platform-components/tokens'
```

## Rules for AI Code Generation

### MUST DO
1. **Always use existing components** from this library before creating custom elements.
2. **Always use CSS variables** for colors, spacing, radius — never hardcode hex values.
3. **Always use the exact prop names** documented in `figma-mapping.json`. Note that `Input`, `Select`, `Toggle` use `inputSize`, `selectSize`, `toggleSize` instead of `size` to avoid HTML attribute conflicts.
4. **Always import from `@aims/platform-components`** — never recreate components.
5. **Use the compound Table pattern** — always combine `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`.

### MUST NOT DO
1. **Never use raw HTML** (`<button>`, `<input>`, `<table>`) when a design system component exists.
2. **Never hardcode colors** — use `var(--color-*)` CSS variables.
3. **Never use inline styles for spacing** — use `var(--spacing-*)`.
4. **Never create one-off button/input variants** — use the existing `variant` and `size` props.
5. **Never skip the `label` prop** on form fields in production code.

## Component Decision Tree

```
Need a user action?
  ├─ Primary action → <Button variant="primary">
  ├─ Secondary/back action → <Button variant="secondary">
  ├─ Dangerous action → <Button variant="destructive">
  └─ Subtle/tertiary action → <Button variant="ghost">

Need to show status?
  ├─ Dot indicator → <Badge state="success|error|alert|inProgress|neutral" />
  └─ Text label → <Tag variant="success|error|alert|...">Label</Tag>

Need user input?
  ├─ Single line text → <Input />
  ├─ Multi-line text → <Textarea />
  ├─ Dropdown selection → <Select options={[...]} />
  └─ Boolean toggle → <Toggle />

Need a dialog?
  └─ <Modal open={bool} onClose={fn} title="..." footer={<buttons>}>

Need navigation?
  ├─ Top bar → <Topbar leading={} center={} trailing={} />
  ├─ Top bar actions → <TopbarButton icon={} />
  ├─ Side navigation → <Sidebar><SidebarItem /></Sidebar>
  └─ Content tabs → <TabGroup><TabItem /></TabGroup>

Need a data table?
  └─ <Table> + <TableHead> + <TableBody> + <TableRow> + <TableHeaderCell> + <TableCell>
```

## Token System

### Spacing (4px base grid)
| Token | Value |
|-------|-------|
| `--spacing-0` | 0px |
| `--spacing-0-5` | 2px |
| `--spacing-1` | 4px |
| `--spacing-2` | 8px |
| `--spacing-3` | 12px |
| `--spacing-4` | 16px |
| `--spacing-5` | 20px |
| `--spacing-6` | 24px |
| `--spacing-7` | 28px |
| `--spacing-10` | 40px |
| `--spacing-12` | 48px |
| `--spacing-16` | 64px |
| `--spacing-20` | 80px |

### Border Radius
| Token | Value |
|-------|-------|
| `--radius-none` | 0 |
| `--radius-xs` | 2px |
| `--radius-s` | 4px |
| `--radius-m` | 8px |
| `--radius-l` | 16px |
| `--radius-xl` | 24px |
| `--radius-xxl` | 32px |
| `--radius-full` | 100% |

### Typography
- **Font**: Inter
- **Scale**: Display (48-32px), Title (24-18px), Subtitle (18-14px), Body (16-12px), Label (16-12px), Caption (14-10px)
- **Weights**: regular=500, semibold=600, bold=700, extraBold=800, black=900

### Semantic Colors (auto-switch in dark mode)
```
Surface: var(--color-surface-{name}-{variant})
  names: neutral, primary, error, alert, success, yellow, limeGreen, purple, lightBlue
  variants: subtle, default, emphasis, darker, lighter, moreSubtle, white, black

Text: var(--color-text-{role})
  roles: title, subtitle, body, caption, label, negative, disabled, link, error, alert, success

Border: var(--color-border-{name}-{variant})
  names: neutral, primary, error, alert, success
  variants: subtle, lighter, default, darker

Icon: var(--color-icon-{name}-{variant})
  names: neutral, primary, error, alert, success
  variants: light, dark, disable
```

## Dark Mode

Set `data-theme="dark"` on any ancestor element. All CSS variables switch automatically.

```html
<div data-theme="dark">
  <!-- All components inside render in dark mode -->
</div>
```

## Figma Source

- **File**: [Design System - AIMS OS](https://www.figma.com/design/v6rmYKA2zmyXWOahlxLOeI/Design-System---AIMS-OS)
- **Library**: Published as "Design System - AIMS OS" team library
- **Mapping**: See `figma-mapping.json` for component-level Figma↔Code correspondence
