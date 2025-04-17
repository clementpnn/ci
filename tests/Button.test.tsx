import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "../src/components/ui/button"
import React from "react"

describe("Button Component", () => {
  it("renders default variant correctly", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: "Click me" })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-primary text-primary-foreground")
  })

  it("renders destructive variant correctly", () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button", { name: "Delete" })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-destructive text-destructive-foreground")
  })

  it("renders outline variant with custom className", () => {
    render(
      <Button variant="outline" className="my-custom-class">
        Outline Button
      </Button>
    )
    const button = screen.getByRole("button", { name: "Outline Button" })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground my-custom-class"
    )
  })

  it("renders asChild prop correctly", () => {
    render(
      <Button asChild>
        <a href="/about">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: "Link Button" })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/about")
    expect(link).toHaveClass("bg-primary text-primary-foreground")
  })

  it("renders correct size variant", () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole("button", { name: "Large Button" })

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("h-11 rounded-md px-8")
  })

  it("passes additional props correctly", () => {
    render(
      <Button data-testid="custom-button" disabled>
        Disabled Button
      </Button>
    )
    const button = screen.getByTestId("custom-button")

    expect(button).toBeDisabled()
  })
})
