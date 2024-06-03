import MessageCard from "components/atom/MessageCard";
import { useEffect, useRef, useState } from "react";

const MessageCardBox = () => {
    const [hasScroll, setHasScroll] = useState<boolean>(false);
    const [messages, setMessages] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const storedMessages = localStorage.getItem("messages");
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }

        const checkScroll = () => {
            const element = containerRef.current;
            const hasVerticalScrollbar = element ? element.scrollHeight > element.clientHeight : false;

            setHasScroll(hasVerticalScrollbar);
        };

        checkScroll();

        window.addEventListener("resize", checkScroll);

        const observer = new MutationObserver(() => {
            checkScroll();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, { childList: true, subtree: true });
        }

        return () => {
            window.removeEventListener("resize", checkScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className='absolute top-40 h-[400px] overflow-auto w-full flex flex-col gap-y-2.5 cs-scrollbar'
        >
            {messages.map((message, index) => (
                <MessageCard key={index} hasScroll={hasScroll} text={message} />
            ))}
        </div>
    );
};

export default MessageCardBox;
