import type { Metadata } from "next";
import { globalStyles } from "@/styles/global";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { CssBaseline, GlobalStyles } from "@mui/material";

export const metadata: Metadata = {
  title: "FIPE",
  description: "Pesquisa de preço do veículo pela tabela FIPE",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
