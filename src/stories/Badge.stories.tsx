import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    state: {
      control: "select",
      options: [
        "error", "alert", "inProgress", "success", "neutral",
        "lightBlue", "limeGreen", "yellow", "purple",
      ],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { state: "error" } };

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <Badge state="error" />
        <span className="text-sm text-[var(--color-text-body)]">Error / Notification</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="alert" />
        <span className="text-sm text-[var(--color-text-body)]">Alert</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="inProgress" />
        <span className="text-sm text-[var(--color-text-body)]">In Progress</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="success" />
        <span className="text-sm text-[var(--color-text-body)]">Success</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="neutral" />
        <span className="text-sm text-[var(--color-text-body)]">Neutral</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="lightBlue" />
        <span className="text-sm text-[var(--color-text-body)]">Light Blue</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="limeGreen" />
        <span className="text-sm text-[var(--color-text-body)]">Lime Green</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="yellow" />
        <span className="text-sm text-[var(--color-text-body)]">Yellow</span>
      </div>
      <div className="flex gap-3 items-center">
        <Badge state="purple" />
        <span className="text-sm text-[var(--color-text-body)]">Purple</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge state="error" size="sm" />
      <Badge state="error" size="md" />
      <Badge state="error" size="lg" />
    </div>
  ),
};
