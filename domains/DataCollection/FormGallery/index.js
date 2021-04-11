import React from 'react';
import {
  ScrollView, StyleSheet,
  View
} from 'react-native';
import {
  Button, Card,
  IconButton,
  Paragraph, Text, Title
} from 'react-native-paper';

import ComingSoonSVG from '../../../assets/graphics/static/Adventurer.svg';
import SmallCardsCarousel from '../../../components/Cards/SmallCardsCarousel';
import I18n from '../../../modules/i18n';
import { layout, theme } from '../../../modules/theme';

const FormGallery = (props) => {
  const {
    navigateToNewRecord, puenteForms,
    navigateToCustomForm, customForms, refreshCustomForms,
    pinnedForms, pinForm, removePinnedForm
  } = props;
  return (
    <View>
      <View key="pinnedForms" style={layout.screenRow}>
        <Text style={styles.header}>{I18n.t('formsGallery.pinnedForms')}</Text>
        <ScrollView horizontal>
          {pinnedForms && pinnedForms.map((form) => (
            <Card
              key={form.objectId}
              style={layout.cardSmallStyle}
              onPress={() => navigateToCustomForm(form)}
              onLongPress={() => removePinnedForm(pinnedForms, form)}
            >
              <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {form.name}
                  </Text>
                </View>
              </View>
            </Card>
          ))}
          {pinnedForms.length < 1 && (
            <View style={layout.screenRow}>
              <Card>
                <Card.Title title={I18n.t('formsGallery.noPinnedForms')} />
              </Card>
            </View>
          )}
        </ScrollView>
      </View>
      <View key="puenteForms" style={layout.screenRow}>
        <Text style={styles.header}>{I18n.t('formsGallery.puenteForms')}</Text>
        <SmallCardsCarousel
          puenteForms={puenteForms}
          navigateToNewRecord={navigateToNewRecord}
          setUser={false}
        />
      </View>
      <View key="customForms" style={layout.screenRow}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.header}>{I18n.t('formsGallery.customForms')}</Text>
          <IconButton
            style={{ bottom: 7 }}
            color={theme.colors.primary}
            size={20}
            icon="refresh"
            onPress={refreshCustomForms}
          />
        </View>
        <ScrollView horizontal>
          {customForms && customForms.map((form) => (
            <Card
              key={form.objectId}
              style={layout.cardSmallStyle}
              onPress={() => {
                navigateToCustomForm(form);
              }}
              onLongPress={() => pinForm(pinnedForms, form)}
            >
              <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {form.name}
                  </Text>
                </View>
              </View>
            </Card>
          ))}
          {customForms.length < 1 && (
            <View style={layout.screenRow}>
              <Card>
                <Card.Title title={I18n.t('formsGallery.noCustomForms')} />
                {/* To be used when marketplace is available */}
                {/* <Card.Content>
              <Text>{I18n.t('formsGallery.checkOutMarketplace')}</Text>
              <Button>{I18n.t('formsGallery.viewMarketplace')}</Button>
            </Card.Content> */}
              </Card>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={layout.screenRow}>
        <Text style={styles.header}>{I18n.t('formsGallery.marketPlace')}</Text>
      </View>
      <View key="marketplace" style={layout.screenRow}>
        <Card>
          <Card.Content>
            <ComingSoonSVG width={200} height={200} />
            <Title>{I18n.t('formsGallery.ourMarketPlace')}</Title>
            <Paragraph>{I18n.t('formsGallery.discoverForms')}</Paragraph>
            <Button>
              <Text>{I18n.t('formsGallery.exploreForms')}</Text>
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    flexShrink: 1,
    textAlign: 'center',
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginVertical: 7,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default FormGallery;
