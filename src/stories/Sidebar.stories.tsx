import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "../components/Sidebar";
import { SidebarItem } from "../components/Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-[600px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const navItems = [
  { label: "Dashboard", active: true },
  { label: "Contacts" },
  { label: "Companies" },
  { label: "Pipeline" },
  { label: "Tasks" },
  { label: "Reports" },
];

export const Default: Story = {
  args: {
    header: (
      <span className="text-base font-semibold text-text-primary">
        AIMS OS
      </span>
    ),
    children: (
      <div className="flex flex-col gap-0.5">
        {navItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            active={item.active}
          />
        ))}
      </div>
    ),
    footer: (
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
          JD
        </div>
        <div className="text-sm">
          <p className="font-medium text-text-primary">John Doe</p>
          <p className="text-text-tertiary text-xs">Admin</p>
        </div>
      </div>
    ),
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    header: (
      <span className="text-base font-semibold text-text-primary text-center block">
        A
      </span>
    ),
    children: (
      <div className="flex flex-col gap-0.5">
        {navItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            active={item.active}
            collapsed
          />
        ))}
      </div>
    ),
  },
};
