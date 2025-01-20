import Link from "next/link";
import { useRouter } from "next/router";

const LanguageButton = () => {
    const { locale, asPath } = useRouter();

    return (
        <div className="text-body text-black/75 w-fit hero-fadeup font-medium hover:shadow-lg text-xl tracking-wide bg-white text-center rounded-full py-1.5 px-5 hover:text-white hover:bg-black duration-300 transition-all mobile:text-lg mobile:px-2 mobile:py-0.5">
            {locale === "ar" ? (
                <Link className="h-full w-full block font-normal text-lg" href={asPath} locale="en">
                    English
                </Link>
            ) : (
                <Link className="h-full w-full block" href={asPath} locale="ar">
                    العربية
                </Link>
            )}
        </div>
    );
};

export default LanguageButton;
