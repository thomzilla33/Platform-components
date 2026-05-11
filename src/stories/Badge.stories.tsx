import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "neutral", "primary", "success", "error", "alert",
        "yellow", "purple", "lightBlue", "limeGreen",
      ],
    },
    size: { control: "select", options: ["sm", "md"] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Badge" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="alert">Alert</Badge>
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="lightBlue">Light Blue</Badge>
      <Badge variant="limeGreen">Lime Green</Badge>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="sm" variant="primary">SM</Badge>
      <Badge size="md" variant="primary">MD</Badge>
    </div>
  ),
};
