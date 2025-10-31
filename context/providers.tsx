"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./modalContext";
import { AuthProvider } from "./authContext";
import ViewLayoutProvider from "./viewLayoutProvider";
import { MarketProvider } from "./marketContext";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import { config } from "@/config/wagmi/config";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();
export const Providers = ({
  children,
  cookies,
}: Readonly<{
  children: React.ReactNode;
  cookies: string | null;
}>) => {
  const initialState = cookieToInitialState(config, cookies);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          showRecentTransactions={false}
          modalSize="compact"
          theme={lightTheme()}
        >
          <AuthProvider>
            <MarketProvider>
              <ViewLayoutProvider>
                <ModalProvider>{children}</ModalProvider>
              </ViewLayoutProvider>
            </MarketProvider>
          </AuthProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
