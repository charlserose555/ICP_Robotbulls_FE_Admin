import AddBonusModal from "../../../components/Popups/AddBonusModal";
import AddFundsModal from "../../../components/Popups/AddFundsModal";
import AddNewuserModal from "../../../components/Popups/AddNewuserModal";
import KycFormModal from "../../../components/Popups/KycFormModal";
import ManageCurrencyModal from "../../../components/Popups/ManageCurrencyModal";
import WalletAddressModal from "../../../components/Popups/WalletAddressModal";
import { useSelector } from "../../../store";

const ModalLayout = () => {
    const { modal } = useSelector((state) => state.menu);

    return (
        <>
             {modal === 'walletAddress' && <WalletAddressModal/>}
             {modal === 'addFunds' && <AddFundsModal/>}
             {modal === 'kycForm' && <KycFormModal/>}
             {modal === 'addBonus' && <AddBonusModal/>}
             {modal === 'addNewUser' && <AddNewuserModal/>}
             {modal === 'manageCurrency' && <ManageCurrencyModal/>}
        </>
    );
};

export default ModalLayout;