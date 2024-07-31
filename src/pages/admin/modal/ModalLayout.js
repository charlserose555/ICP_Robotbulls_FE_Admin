import WalletAddressModal from "../../../components/Popups/WalletAddressModal";
import { useSelector } from "../../../store";

const ModalLayout = () => {
    const { modal } = useSelector((state) => state.menu);

    return (
        <>
             {modal === 'walletAddress' && <WalletAddressModal/>}
        </>
    );
};

export default ModalLayout;