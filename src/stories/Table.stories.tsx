import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "../components/Table";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};
export default meta;
type Story = StoryObj<typeof Table>;

const rows = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { name: "Dan Brown", email: "dan@example.com", role: "Editor", status: "Active" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.email}>
            <TableCell>{r.name}</TableCell>
            <TableCell>{r.email}</TableCell>
            <TableCell>{r.role}</TableCell>
            <TableCell>
              <Badge variant={r.status === "Active" ? "success" : "neutral"} size="sm">
                {r.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ClickableRows: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell align="right">Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.email} onClick={() => alert(`Clicked ${r.name}`)}>
            <TableCell>{r.name}</TableCell>
            <TableCell>{r.email}</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
