import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Toggle } from "../components/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    toggleSize: { control: "select", options: ["sm", "md"] },
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { label: "Enable notifications" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle toggleSize="sm" label="Small toggle" />
      <Toggle toggleSize="md" label="Medium toggle" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle label="Disabled off" disabled />
      <Toggle label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

const ControlledDemo = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <Toggle label={on ? "Dark mode ON" : "Dark mode OFF"} checked={on} onChange={() => setOn(!on)} />
      <span className="text-sm text-[var(--color-text-subtitle)]">State: {on ? "on" : "off"}</span>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDemo />,
};
