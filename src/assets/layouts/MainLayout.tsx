interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <main className='flex items-center justify-center'>
            <section className='w-3/5 flex items-center justify-between'>
                <article>
                    <p className='text-5xl font-semibold leading-snug text-white'>
                        안녕하세요.
                        <br />
                        <span className='text-blue-600'>포키 응원</span>하는
                        <br />웹 서비스 입니다.
                    </p>
                    <button>github 구경하기</button>
                </article>
                <article className='w-[430px] h-screen bg-gray300'>{children}</article>
            </section>
        </main>
    );
};
export default MainLayout;
