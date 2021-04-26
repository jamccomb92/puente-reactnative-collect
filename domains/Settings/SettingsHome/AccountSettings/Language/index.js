import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View
} from 'react-native';
import {
  Button, Headline
} from 'react-native-paper';

import { getData, storeData } from '../../../../../modules/async-storage';
import I18n from '../../../../../modules/i18n';

const Language = () => {
  useEffect(() => {
    async function setUserInformation() {
      const currentLocale = await getData('locale');
      setLanguage(currentLocale);
    }
    setUserInformation();
  }, [updated]);

  const [language, setLanguage] = useState('');
  const [updated, setUpdated] = useState(false);

  const handleLanguage = async (lang) => {
    setLanguage(lang);
    await storeData(lang, 'locale');
    setUpdated(true);
    I18n.locale = lang;
  };

  return (
    <View>
      <Headline>{I18n.t('languageSettings.chooseLanguage')}</Headline>
      <View style={styles.buttonContainer}>
        {language === 'en' && (
          <Button mode="contained">{I18n.t('languagePicker.english')}</Button>
        )}
        {language !== 'en' && (
          <Button mode="outlined" onPress={() => { handleLanguage('en'); }}>{I18n.t('languagePicker.english')}</Button>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {language === 'es' && (
          <Button mode="contained">{I18n.t('languagePicker.spanish')}</Button>
        )}
        {language !== 'es' && (
          <Button mode="outlined" onPress={() => { handleLanguage('es'); }}>{I18n.t('languagePicker.spanish')}</Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 10
  }
});

export default Language;