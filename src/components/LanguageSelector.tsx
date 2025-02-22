import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleChange}
      className=" rounded-md p-2 pointer"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="rw">Kinyarwanda</option>
    </select>
  );
};

export default LanguageSelector;
