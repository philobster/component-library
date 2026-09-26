import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return <Input {...args} value={value} onChange={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: "Username" },
};

export const WithPlaceholder: Story = {
  args: { placeholder: "Enter your name" },
};

export const WithError: Story = {
  args: { label: "Email", error: "Please enter a valid email" },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};

export const Small: Story = {
  args: { label: "Small", size: "sm" },
};

export const Large: Story = {
  args: { label: "Large", size: "lg" },
};

export const Password: Story = {
  args: { label: "Password", type: "password" },
};

export const Email: Story = {
  args: { label: "Email", type: "email" },
};

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("Hello");
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: { label: "Pre-filled" },
};