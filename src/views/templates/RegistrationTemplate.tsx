import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HyperlinkButton from "components/atom/HyperlinkButton";
import MainTitle from "components/atom/MainTitle";
import TextArea from "components/atom/TextArea";
import { showToast, EToastType } from "components/atom/Toast";
import SingleCenterItemBox from "components/molecule/SingleCenterItemBox";

const RegistrationTemplate = () => {
    const [text, setText] = useState<string>("");
    const navigate = useNavigate();

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        if (text.trim() === "") {
            showToast({ type: EToastType.ERROR, message: "빈칸은 입력할 수 없어요.😅" });
        } else {
            localStorage.setItem("text", text);
            showToast({ type: EToastType.SUCCESS, message: "응원해주셔서 감사해요!🥳" });
            navigate("/");
        }
    };

    return (
        <>
            <MainTitle content='응원 한마디 부탁드립니다.^^' />
            <SingleCenterItemBox>
                <TextArea placeholder='ex. 포키 화이팅' value={text} onChange={handleTextChange} />
            </SingleCenterItemBox>
            <HyperlinkButton label='응원 남기기' onClick={handleSubmit} />
        </>
    );
};

export default RegistrationTemplate;
