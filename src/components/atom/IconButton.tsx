import tw, { styled } from "twin.macro";

interface IStyleIconButtonProps {
    icon: string;
}

interface IIconButtonProps extends IStyleIconButtonProps {
    text: string;
    link: string;
}

const IconButton = ({ text, link, icon }: IIconButtonProps) => {
    return (
        <Container href={link} icon={icon}>
            {text}
        </Container>
    );
};

const Container = styled.a<IStyleIconButtonProps>`
    ${tw`h-[50px] px-[10px] py-[14px] rounded bg-gray000 text-gray300 text-xl font-semibold`};
    ::before {
        ${tw`content-[''] inline-block align-middle w-[30px] h-[30px] mr-[20px]`};
        background: url(${({ icon }) => icon}) center / contain no-repeat;
    }
`;

export default IconButton;
