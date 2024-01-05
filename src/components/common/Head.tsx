import NextHead from 'next/head';
import config from 'config';
import Script from 'next/script';

interface HeadProps {
    title?: string;
    description: string;
    pathname?: string;
    ogTitle?: string;
    ogImageUrl?: string;
}

const Head = ({
    title,
    description,
    pathname,
    ogTitle,
    ogImageUrl,
}: HeadProps) => {
    const pageUrl = generateUrl(pathname);
    let metaOGImage: JSX.Element | undefined = undefined;

    if (ogImageUrl !== undefined) {
        const pageOgImageUrl = generateUrl(ogImageUrl);

        metaOGImage = (
            <>
                <meta property='og:image' content={pageOgImageUrl} />
                <meta property='og:image:secure_url' content={pageOgImageUrl} />
                <meta property='og:image:type' content='image/png' />
            </>
        );
    }

    return (
        <NextHead>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel='canonical' href={pageUrl} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={pageUrl} />
            <meta property='og:site_name' content={config.appName} />
        </NextHead>
    );
};

function generateUrl(pathname: string | undefined): string {
    if (pathname === undefined) {
        return config.domain as string;
    } else if (pathname.startsWith('/')) {
        return `${config.domain}${pathname}`;
    } else {
        return `${config.domain}/${pathname}`;
    }
}

export default Head;
