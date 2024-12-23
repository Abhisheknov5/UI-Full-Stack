import { useState } from "react"

{/*
Touch Events
  - onTouchStart
  - onTouchEnd
  - onTouchMove
 */}

export function TouchEvent() {
    const [msg, setMsg] = useState('');

    function GetDetails(str) {
        setMsg(str);
    }

    return (
        <div className="container">
            <h3>Touch Event</h3>
            <div className="container">
                <img 
                    onTouchStart={() => GetDetails('30% off on Mobiles')} 
                    onClick={() => GetDetails('30% off on Mobiles')} // Added onClick as fallback
                    src="Amazon2.jpg" 
                    alt="Amazon Mobile Offer" 
                />
                <img 
                    onTouchStart={() => GetDetails('50% OFF on fashion')} 
                    onClick={() => GetDetails('50% OFF on fashion')} // Added onClick as fallback
                    src="Amazon3.jpg" 
                    alt="Amazon Fashion Offer" 
                />
                <p className="h2">{msg}</p>
            </div>
        </div>
    );
}
