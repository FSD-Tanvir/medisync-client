import { useTranslation } from "react-i18next";


const languages = [
    { code: "en", lang: "English" },
    { code: "bn", lang: "Bangla" },
]
const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className="text-end">
            {
                languages.map((lng) => {
                    return (
                        <button
                            className={lng.code === i18n.language ? "bg-primary-bg-color px-2 py-1 text-white font-semibold" : "px-2 py-1 font-semibold bg-slate-400 text-white mx-1"}
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}>
                            {lng.lang}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default LanguageSelector;