import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: neobrutalism }}>
      {children}
    </ClerkProvider>
  );
};

export default Layout;
