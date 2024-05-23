import type { Metadata } from "next";
import { globalStyles } from "@/styles/global";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';
import { getCssText } from "@/styles/stitches.config";
import { CssBaseline } from "@mui/material";

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
  globalStyles();
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
