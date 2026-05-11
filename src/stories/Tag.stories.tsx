import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../components/Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
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
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: "Tag" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Tag variant="neutral">Neutral</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="alert">Alert</Tag>
      <Tag variant="yellow">Yellow</Tag>
      <Tag variant="purple">Purple</Tag>
      <Tag variant="lightBlue">Light Blue</Tag>
      <Tag variant="limeGreen">Lime Green</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Tag size="sm" variant="primary">SM</Tag>
      <Tag size="md" variant="primary">MD</Tag>
    </div>
  ),
};
