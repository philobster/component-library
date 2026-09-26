import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "Modal Title",
    children: "This is the modal content.",
  },
};

export const WithoutTitle: Story = {
  args: {
    children: "This modal has no title.",
  },
};

export const Small: Story = {
  args: {
    title: "Small Modal",
    children: "This is a small modal.",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    title: "Large Modal",
    children: "This is a large modal with more content.",
    size: "lg",
  },
};