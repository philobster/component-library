import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
    },
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a card.",
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <h2 className="font-bold text-lg mb-2">Card Title</h2>
        <p className="text-gray-400">Some content inside the card.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined card",
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: "Elevated card",
  },
};

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: "Small padding",
  },
};

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: "Large padding",
  },
};

export const Grid: Story = {
    args: {
        children: (
            <div className="grid grid-cols-2 gap-4 p-4">
            <Card>Card 1</Card>
            <Card>Card 2</Card>
            <Card>Card 3</Card>
            <Card>Card 4</Card>
            </div>
        ),
    }
};