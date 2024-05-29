interface IMainTitleProps {
    title?: string;
    content: string;
}

const MainTitle = ({ title = "", content }: IMainTitleProps) => {
    return (
        <div className='text-center'>
            <p className='text-gray000 text-xl font-medium leading-6'>{content}</p>
            {title !== "" && (
                <h1 className='mt-2 text-primary text-5xl font-semibold leading-snug cs-text-shadow-primary'>
                    {title}
                </h1>
            )}
        </div>
    );
};

export default MainTitle;
