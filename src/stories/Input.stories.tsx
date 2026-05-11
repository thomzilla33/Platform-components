import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Textarea, Select } from "../components/Input";

const inputMeta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    inputSize: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default inputMeta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: "Email", placeholder: "you@example.com" },
};

export const WithHint: Story = {
  args: { label: "Email", placeholder: "you@example.com", hint: "We'll never share your email." },
};

export const WithError: Story = {
  args: { label: "Email", placeholder: "you@example.com", error: "Invalid email address." },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input inputSize="sm" label="Small" placeholder="sm" />
      <Input inputSize="md" label="Medium" placeholder="md" />
      <Input inputSize="lg" label="Large" placeholder="lg" />
    </div>
  ),
};

export const TextareaStory: StoryObj<typeof Textarea> = {
  render: () => (
    <div className="max-w-sm">
      <Textarea label="Description" placeholder="Enter a description…" hint="Max 500 characters." />
    </div>
  ),
  name: "Textarea",
};

export const TextareaError: StoryObj<typeof Textarea> = {
  render: () => (
    <div className="max-w-sm">
      <Textarea label="Description" placeholder="Enter a description…" error="This field is required." />
    </div>
  ),
  name: "Textarea with Error",
};

export const SelectStory: StoryObj<typeof Select> = {
  render: () => (
    <div className="max-w-sm">
      <Select
        label="Country"
        placeholder="Select a country"
        options={[
          { label: "United States", value: "us" },
          { label: "Colombia", value: "co" },
          { label: "Mexico", value: "mx" },
        ]}
      />
    </div>
  ),
  name: "Select",
};

export const SelectWithError: StoryObj<typeof Select> = {
  render: () => (
    <div className="max-w-sm">
      <Select
        label="Country"
        placeholder="Select a country"
        error="Please select a country."
        options={[
          { label: "United States", value: "us" },
          { label: "Colombia", value: "co" },
        ]}
      />
    </div>
  ),
  name: "Select with Error",
};
