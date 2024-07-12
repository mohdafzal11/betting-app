import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";
import TonAddress from "./components/TonAddress"

export default function App() {
  return (
    <div>
      <TonConnectUIProvider manifestUrl="https://betting-app-three.vercel.app/tonconnect-manifest.json">
        <Header></Header>
        <TonAddress></TonAddress>
      </TonConnectUIProvider>
    </div>
  );
}
