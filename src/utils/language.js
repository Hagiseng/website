import de from './de'
import en from './en'

const language = {
    getLanguageJSON: () => {
        const lang = window.localStorage.getItem("lang")
        if(lang === "en") return en
        else return de
    },
    getLang : () => {
        const lang = window.localStorage.getItem("lang")
        if(lang === "en") return lang
        else return "de"
    },
    setLang : (lang) => {
        console.log("hello world")
        window.localStorage.setItem("lang", lang)
    }

}

export default language;