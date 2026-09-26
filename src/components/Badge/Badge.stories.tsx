import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    component: Badge,
    title: "Components/Badge",
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "success", "warning", "danger", "info"]
        },
        size: {
            control: "select",
            options: ["md", "sm"]
        }
    }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        variant: "default"
    }
};

export const Success: Story = {
    args: {
        variant: "success"
    }
};

export const Warning: Story = {
    args: {
        variant: "warning"
    }
};

export const Danger: Story = {
    args: {
        variant: "danger"
    }
};

export const Info: Story = {
    args: {
        variant: "info"
    }
};

export const Small: Story = {
    args: {
        size: "sm"
    }
};