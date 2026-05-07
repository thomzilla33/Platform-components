import type { Meta, StoryObj } from "@storybook/react-vite";
import { Topbar } from "../components/Topbar";
import { TopbarButton } from "../components/Topbar";

const meta: Meta<typeof Topbar> = {
  title: "Components/Topbar",
  component: Topbar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Topbar>;

export const Default: Story = {
  args: {
    leading: (
      <span className="text-lg font-semibold text-text-primary">AIMS OS</span>
    ),
    center: (
      <div className="flex gap-1">
        <TopbarButton active>Dashboard</TopbarButton>
        <TopbarButton>Contacts</TopbarButton>
        <TopbarButton>Pipeline</TopbarButton>
        <TopbarButton>Reports</TopbarButton>
      </div>
    ),
    trailing: (
      <div className="flex items-center gap-2">
        <TopbarButton>Settings</TopbarButton>
        <div className="size-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
          JD
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    leading: (
      <span className="text-lg font-semibold text-text-primary">AIMS OS</span>
    ),
    trailing: (
      <div className="size-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-semibold">
        U
      </div>
    ),
  },
};
