import HyperlinkButton from "components/atom/HyperlinkButton";
import MainTitle from "components/atom/MainTitle";
import MessageCardBox from "components/molecule/MessageCardBox";

const MainTemplate = () => {
    return (
        <>
            <MainTitle title='감사합니다' content='응원해주셔서' />
            <MessageCardBox />
            <HyperlinkButton label='응원하기' />
        </>
    );
};

export default MainTemplate;
