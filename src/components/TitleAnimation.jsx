import { Icon } from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';
import { Toggle } from './Toggle';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import ToggleButton from './ToggleButton';

const TitleAnimation = () => {

  const { t } = useTranslation()

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="mb-4 fonts">

      <div className="row flex justify-content-around">
        <ToggleButton/>
        <Toggle
          leftLabel={<label className="form-check-label" htmlFor="flexSwitchCheckChecked"><Icon icon="flagpack:gb-ukm" width="24" height="23" /></label>}
          rightLabel={<label className="form-check-label" htmlFor="flexSwitchCheckChecked"><Icon icon="flag:ar-4x3" width="24" height="23" /></label>}
          handleToggle={() => setLanguage(i18n.language === 'es' ? 'en' : 'es')}
        />
      </div>

      <h1>{t('title')}</h1>
      <TypeAnimation
        sequence={[
          'Data Analyst',
          2000,
          'Data Visualization',
          2000,
          'BI Developer',
          2000,
          'BI Consultant',
          2000,
        ]}
        className='fonts'
        wrapper="span"
        speed={50}
        style={{ fontSize: '2.2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TitleAnimation