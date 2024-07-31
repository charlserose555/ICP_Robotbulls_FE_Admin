import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

function user() {
    const history = useHistory();
    const [mobile, setMobile] = useState('');
    const changeMobile = (value) => {
        setMobile(value);
    }

    const connect = () => {
        history.push("/app/user")
    }
    
    return (<>
        <div className="bg-center flex h-full" style={{minHeight: "100vh"}}>
        </div>
    </>)
}

export default user;