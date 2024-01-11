import { Icon } from "@iconify/react"
import { useEffect, useState } from "react";

const ReturnButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setShowButton(scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <a href="#home">
            <div className={`returnButton btn btn-primary position-fixed ${showButton ? 'visible' : ''}`}>
                <Icon icon="mingcute:arrow-up-fill" height={28} width={28} />
            </div>

        </a>
        </>
    );
};

export default ReturnButton
