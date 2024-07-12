import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Header from './components/Header';

export default function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
            <Header></Header>
        </TonConnectUIProvider>
    );
}

