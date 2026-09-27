import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./Select";
import { useState } from "react";

const typeOptions = [
  { value: "fire", label: "Fire" },
  { value: "water", label: "Water" },
  { value: "grass", label: "Grass" },
  { value: "electric", label: "Electric" },
  { value: "psychic", label: "Psychic" },
];

const meta: Meta<typeof Select> = {
    component: Select,
    title: "Components/Select",
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"]
        }
    },
    render: (args) => {
        const [value, setValue] = useState("");
        return <Select {...args} value={value} onChange={setValue} />;
    }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Choose a type",
    options: typeOptions
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Choose a type",
    placeholder: "Select one...",
    options: typeOptions
  },
};

export const WithError: Story = {
  args: {
    label: "Choose a type",
    error: "Please select an option",
    options: typeOptions
  },
};

export const Disabled: Story = {
  args: {
    label: "Choose a type",
    disabled: true,
    options: typeOptions
  },
};

export const Small: Story = {
  args: {
    label: "Choose a type",
    size: "sm",
    options: typeOptions
  },
};

export const Large: Story = {
  args: {
    label: "Choose a type",
    size: "lg",
    options: typeOptions
  },
};