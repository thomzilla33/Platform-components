import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TabGroup, TabItem } from "../components/Tab";

const meta: Meta<typeof TabGroup> = {
  title: "Components/Tab",
  component: TabGroup,
};
export default meta;
type Story = StoryObj<typeof TabGroup>;

const TabDemo = () => {
  const [active, setActive] = useState("overview");
  return (
    <TabGroup>
      <TabItem active={active === "overview"} onClick={() => setActive("overview")}>Overview</TabItem>
      <TabItem active={active === "analytics"} onClick={() => setActive("analytics")}>Analytics</TabItem>
      <TabItem active={active === "settings"} onClick={() => setActive("settings")}>Settings</TabItem>
    </TabGroup>
  );
};

export const Default: Story = {
  render: () => <TabDemo />,
};

export const ManyTabs: Story = {
  render: () => {
    const tabs = ["Dashboard", "Users", "Roles", "Permissions", "Audit Log", "Settings"];
    const [active, setActive] = useState("Dashboard");
    return (
      <TabGroup>
        {tabs.map((t) => (
          <TabItem key={t} active={active === t} onClick={() => setActive(t)}>{t}</TabItem>
        ))}
      </TabGroup>
    );
  },
};
