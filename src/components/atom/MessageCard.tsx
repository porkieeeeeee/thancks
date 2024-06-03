import { messageIcon } from "assets/imagesManagement";
import tw, { css, styled } from "twin.macro";

interface IMessageCardProps {
    text: string;
    hasScroll: boolean;
}

const MessageCard = ({ text, hasScroll }: IMessageCardProps) => {
    return (
        <Container hasScroll={hasScroll}>
            <Message>{text}</Message>
        </Container>
    );
};

const Container = styled.div<{ hasScroll: boolean }>`
    ${tw`w-full h-fit py-[16px] pl-[84px] pr-[14px] bg-gray000 rounded break-all`};

    ${({ hasScroll }) =>
        hasScroll &&
        css`
            width: calc(100% - 4px);
            margin-right: 4px;
        `}
`;

const Message = styled.p`
    ${tw`relative text-gray300 text-xs font-normal leading-4`};
    ::before {
        ${tw`content-[''] absolute top-[6%] left-[-70px] translate-y-[-50%] w-[50px] h-[50px]`};
        background: url(${messageIcon}) center / contain no-repeat;
    }
`;

export default MessageCard;
