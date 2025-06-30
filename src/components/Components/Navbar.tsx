"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const resumeUrl = "../../../public/resume/pdf.pdf";
  const handleResumeDownload = (url: any) => {
    const resumeName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("Download", resumeName);
    aTag.click();
    aTag.remove();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#250c44f8] w-full border-b  text-white">
      <div className="w-full flex items-center justify-between h-16 px-6 md:px-12">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          AM
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Button (optional) */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleResumeDownload(resumeUrl)}
            className="hover:bg-purple-600 cursor-pointer hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600  text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border  rounded duration-150 flex items-center gap-x-3 "
            variant="outline"
            size="sm"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="outline" className="w-full">
                Resume
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
