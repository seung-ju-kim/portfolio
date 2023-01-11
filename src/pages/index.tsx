import Head from 'components/common/Head';
import config from 'config';
import Home from '../components/home';
import * as ROUTES from 'constants/routes';

export default function HomePage() {
    return (
        <>
            <Head
                title='김승주의 포트폴리오 - 소개'
                description='김승주의 포트폴리오 소개 페이지입니다.'
                pathname={ROUTES.HOME}
                ogImageUrl={config.logoPath}
            />
            <Home />
        </>
    );
}
