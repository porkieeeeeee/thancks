import { githubIcon } from "assets/imagesManagement";
import IconButton from "components/atom/IconButton";

interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <main className='flex items-center justify-center'>
            <section className='w-3/5 flex items-center justify-center 2xl:justify-between'>
                <article className='hidden 2xl:block'>
                    <p className='mb-[50px] text-5xl font-semibold leading-snug text-gray000 cs-text-shadow-primary'>
                        안녕하세요.
                        <br />
                        <span className='text-primary cs-text-shadow-none'>포키 응원</span>하는
                        <br />웹 서비스 입니다.
                    </p>
                    <IconButton text='github 구경하기' link='#' icon={githubIcon} />
                </article>
                <article className='min-w-[430px] h-screen bg-gray300'>{children}</article>
            </section>
        </main>
    );
};
export default MainLayout;
