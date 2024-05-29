interface IHyperlinkButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const HyperlinkButton = ({ label, onClick, type = "button" }: IHyperlinkButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className='w-full h-[58px] mt-auto rounded bg-primary text-gray000 text-xl font-medium leading-6'
        >
            {label}
        </button>
    );
};

export default HyperlinkButton;
