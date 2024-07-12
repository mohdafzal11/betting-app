import { TonConnectButton } from "@tonconnect/ui-react";

 const Header = () => {
    return (
        <header className="flex justify-between ">
            <div><img src="" alt="logo" />
            </div>
            <div>
            <TonConnectButton className="my-button-class "/>
            </div>
        </header>
    );
};

export default Header;