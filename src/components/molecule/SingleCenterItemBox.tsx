interface ISingleCenterItemBoxProps {
    children: React.ReactNode;
}

const SingleCenterItemBox = ({ children }: ISingleCenterItemBoxProps) => {
    return <div className='absolute top-40 overflow-auto w-full flex flex-col gap-y-2.5 cs-scrollbar'>{children}</div>;
};

export default SingleCenterItemBox;
