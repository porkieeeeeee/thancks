import { useEffect, useRef, useState } from "react";
import MessageCard from "components/atom/MessageCard";

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
            {messages.length > 0 ? (
                messages.map((message, index) => <MessageCard key={index} hasScroll={hasScroll} text={message} />)
            ) : (
                <div className='text-center text-gray-500'>
                    응원 메시지가 없습니다.
                    <br />
                    가장 먼저 포키를 응원해보세요!
                </div>
            )}
        </div>
    );
};

export default MessageCardBox;
