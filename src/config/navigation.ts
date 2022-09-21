import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

interface NavigationItemConfig {
  label: string;
  icon?: React.ComponentType;
  to?: string;
  type?: string;
}

export const navigationConfig: NavigationItemConfig[] = [
  {
    type: "item",
    label: "Reports",
    icon: SummarizeIcon,
    to: "/reports",
  },
  {
    type: "item",
    label: "Settings",
    icon: SettingsIcon,
    to: "/settings",
  },
  {
    type: "item",
    label: "Send Feedback",
    icon: FeedbackIcon,
    to: "/send-feedback",
  },
  {
    type: "item",
    label: "Profile",
    icon: AccountBoxIcon,
    to: "/Profile",
  },
  {
    type: "item",
    label: "What's NEW",
    icon: NewReleasesIcon,
    to: "/new",
  },
];
