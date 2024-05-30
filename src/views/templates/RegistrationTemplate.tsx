import HyperlinkButton from "components/atom/HyperlinkButton";
import MainTitle from "components/atom/MainTitle";
import TextArea from "components/atom/TextArea";
import SingleCenterItemBox from "components/molecule/SingleCenterItemBox";

const RegistrationTemplate = () => {
    return (
        <>
            <MainTitle content='응원 한마디 부탁드립니다.^^' />
            <SingleCenterItemBox>
                <TextArea placeholder='ex. 포키 화이팅' />
            </SingleCenterItemBox>
            <HyperlinkButton label='응원 남기기' />
        </>
    );
};

export default RegistrationTemplate;
