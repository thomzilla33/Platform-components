import { useState } from "react";
import {
  Topbar,
  TopbarButton,
  TabGroup,
  TabItem,
  Sidebar,
  SidebarItem,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  Tag,
  Badge,
  Toggle,
} from "@aims/platform-components";

/* ── Inline SVG Icons ── */

function SettingsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.86 1.33a1.2 1.2 0 0 1 2.28 0l.22.66a1.2 1.2 0 0 0 1.52.72l.64-.25a1.2 1.2 0 0 1 1.61 1.14l-.02.69a1.2 1.2 0 0 0 1.07 1.22l.68.07a1.2 1.2 0 0 1 .81 1.97l-.45.52a1.2 1.2 0 0 0 0 1.62l.45.52a1.2 1.2 0 0 1-.81 1.97l-.68.07a1.2 1.2 0 0 0-1.07 1.22l.02.69a1.2 1.2 0 0 1-1.61 1.14l-.64-.25a1.2 1.2 0 0 0-1.52.72l-.22.66a1.2 1.2 0 0 1-2.28 0l-.22-.66a1.2 1.2 0 0 0-1.52-.72l-.64.25a1.2 1.2 0 0 1-1.61-1.14l.02-.69a1.2 1.2 0 0 0-1.07-1.22l-.68-.07a1.2 1.2 0 0 1-.81-1.97l.45-.52a1.2 1.2 0 0 0 0-1.62l-.45-.52A1.2 1.2 0 0 1 1.14 4l.68-.07a1.2 1.2 0 0 0 1.07-1.22l-.02-.69A1.2 1.2 0 0 1 4.48 .88l.64.25a1.2 1.2 0 0 0 1.52-.72l.22-.66ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect
        x="11"
        y="11"
        width="7"
        height="7"
        rx="1.5"
        fill="currentColor"
      />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 16c0-2.76 2.24-5 5-5s5 2.24 5 5H2ZM18 16c0-2.21-1.79-4-4-4-.87 0-1.68.28-2.34.75C12.5 13.7 13 14.8 13 16h5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 4A1.5 1.5 0 0 1 4 2.5h3.17a1.5 1.5 0 0 1 1.06.44L9.5 4.21h6A1.5 1.5 0 0 1 17 5.71V15a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 15V4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SidebarSettingsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.58 1.66a1.5 1.5 0 0 1 2.84 0l.28.83a1.5 1.5 0 0 0 1.9.9l.8-.31a1.5 1.5 0 0 1 2.01 1.42l-.02.86a1.5 1.5 0 0 0 1.34 1.53l.85.09a1.5 1.5 0 0 1 1.01 2.46l-.56.65a1.5 1.5 0 0 0 0 2.02l.56.65a1.5 1.5 0 0 1-1.01 2.46l-.85.09a1.5 1.5 0 0 0-1.34 1.53l.02.86a1.5 1.5 0 0 1-2.01 1.42l-.8-.31a1.5 1.5 0 0 0-1.9.9l-.28.83a1.5 1.5 0 0 1-2.84 0l-.28-.83a1.5 1.5 0 0 0-1.9-.9l-.8.31A1.5 1.5 0 0 1 3.6 17l.02-.86a1.5 1.5 0 0 0-1.34-1.53l-.85-.09a1.5 1.5 0 0 1-1.01-2.46l.56-.65a1.5 1.5 0 0 0 0-2.02l-.56-.65a1.5 1.5 0 0 1 1.01-2.46l.85-.09A1.5 1.5 0 0 0 3.62 5l-.02-.86A1.5 1.5 0 0 1 5.6 2.72l.8.31a1.5 1.5 0 0 0 1.9-.9l.28-.83ZM10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2v12M2 8h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.08 1.75a1.38 1.38 0 0 1 1.95 0l.22.22a1.38 1.38 0 0 1 0 1.95l-7.5 7.5-2.63.66.66-2.63 7.3-7.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Data ── */

type TabId = "members" | "roles" | "settings";

interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: string;
  readonly roleVariant: "primary" | "purple" | "alert";
  readonly status: "success" | "neutral" | "error";
  readonly statusLabel: string;
}

const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@aims.dev",
    role: "Admin",
    roleVariant: "primary",
    status: "success",
    statusLabel: "Active",
  },
  {
    id: "2",
    name: "Bob Chen",
    email: "bob@aims.dev",
    role: "Editor",
    roleVariant: "purple",
    status: "success",
    statusLabel: "Active",
  },
  {
    id: "3",
    name: "Carol Williams",
    email: "carol@aims.dev",
    role: "Viewer",
    roleVariant: "alert",
    status: "neutral",
    statusLabel: "Inactive",
  },
] as const;

/* ── Page Component ── */

export function TeamMembersPage() {
  const [activeTab, setActiveTab] = useState<TabId>("members");
  const [showInactive, setShowInactive] = useState(false);

  const visibleMembers = showInactive
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.status !== "neutral");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "var(--color-surface-neutral-subtle)",
      }}
    >
      {/* ── Topbar ── */}
      <Topbar
        leading={
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--color-text-title)",
            }}
          >
            AIMS OS
          </span>
        }
        center={
          <TabGroup>
            <TabItem
              active={activeTab === "members"}
              onClick={() => setActiveTab("members")}
            >
              Members
            </TabItem>
            <TabItem
              active={activeTab === "roles"}
              onClick={() => setActiveTab("roles")}
            >
              Roles
            </TabItem>
            <TabItem
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </TabItem>
          </TabGroup>
        }
        trailing={<TopbarButton icon={<SettingsIcon />} />}
      />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* ── Sidebar ── */}
        <Sidebar>
          <SidebarItem icon={<DashboardIcon />} label="Dashboard" />
          <SidebarItem icon={<TeamIcon />} label="Team" active />
          <SidebarItem icon={<ProjectsIcon />} label="Projects" />
          <SidebarItem icon={<SidebarSettingsIcon />} label="Settings" />
        </Sidebar>

        {/* ── Main Content ── */}
        <main
          style={{
            flex: 1,
            overflow: "auto",
            padding: "var(--spacing-6)",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "var(--spacing-6)",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--color-text-title)",
                  margin: 0,
                }}
              >
                Team Members
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-body)",
                  marginTop: "var(--spacing-1)",
                  marginBottom: 0,
                }}
              >
                Manage your team members and their roles.
              </p>
            </div>
            <Button variant="primary" size="md" icon={<PlusIcon />}>
              Invite Member
            </Button>
          </div>

          {/* Toggle for inactive members */}
          <div style={{ marginBottom: "var(--spacing-4)" }}>
            <Toggle
              label="Show inactive members"
              checked={showInactive}
              onChange={(e) => setShowInactive(e.target.checked)}
            />
          </div>

          {/* Members Table */}
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell align="right">Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "var(--color-text-title)",
                        }}
                      >
                        {member.name}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--color-text-caption)",
                          marginTop: "var(--spacing-0-5)",
                        }}
                      >
                        {member.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Tag variant={member.roleVariant} size="sm">
                      {member.role}
                    </Tag>
                  </TableCell>
                  <TableCell>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "var(--spacing-2)",
                      }}
                    >
                      <Badge state={member.status} size="sm" />
                      <span
                        style={{
                          fontSize: "14px",
                          color: "var(--color-text-body)",
                        }}
                      >
                        {member.statusLabel}
                      </span>
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="ghost" size="sm" icon={<EditIcon />}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  );
}

export default TeamMembersPage;
