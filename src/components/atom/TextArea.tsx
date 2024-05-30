interface ITextareaProps {
    placeholder?: string;
}

const TextArea = ({ placeholder }: ITextareaProps) => {
    return <textarea className='w-full h-[330px] p-5 rounded-md outline-none bg-gray000' placeholder={placeholder} />;
};
export default TextArea;
