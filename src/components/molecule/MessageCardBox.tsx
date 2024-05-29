import MessageCard from "components/atom/MessageCard";
import { useEffect, useRef, useState } from "react";

const MessageCardBox = () => {
    const [hasScroll, setHasScroll] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
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
            className='absolute top-40 h-[400px] overflow-auto flex flex-col gap-y-2.5 cs-scrollbar'
        >
            <MessageCard
                hasScroll={hasScroll}
                text='나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. '
            />
            <MessageCard
                hasScroll={hasScroll}
                text='나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. 나는자연을사랑합니다. '
            />
            <MessageCard hasScroll={hasScroll} text='나는자연을사랑합니다.' />
            <MessageCard hasScroll={hasScroll} text='나는자연을사랑합니다.' />
        </div>
    );
};

export default MessageCardBox;
