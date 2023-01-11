import Head from 'components/common/Head';
import Home from '../../components/home';
import * as ROUTES from 'constants/routes';
import config from 'config';

export default function HomePage() {
  return (
    <>
      <Head
        title='김승주의 포트폴리오 - HOME'
        description='김승주의 포트폴리오 사이트입니다.'
        pathname={ROUTES.HOME}
        ogImageUrl={config.logoPath}
      />
      <Home />
    </>
  );
}
