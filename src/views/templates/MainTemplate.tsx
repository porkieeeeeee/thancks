import HyperlinkButton from "components/atom/HyperlinkButton";
import MainTitle from "components/atom/MainTitle";
import MessageCardBox from "components/molecule/MessageCardBox";
import { useNavigate } from "react-router-dom";

const MainTemplate = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/registration");
    };

    return (
        <>
            <MainTitle title='감사합니다' content='응원해주셔서' />
            <MessageCardBox />
            <HyperlinkButton label='응원하기' onClick={handleButtonClick} />
        </>
    );
};

export default MainTemplate;
