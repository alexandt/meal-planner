/**
 * Meal Planner App
 *
 * Cross-platform mobile application for meal planning and recipe management
 * Developed on Windows, deployable to iOS
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? '#FFFFFF' : '#000000',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? '#CCCCCC' : '#444444',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
          }}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>🍽️ Meal Planner</Text>
            <Text style={styles.headerSubtitle}>
              Plan Your Meals, Build Your Recipes
            </Text>
          </View>

          <Section title="App Overview">
            Welcome to Meal Planner! This app helps you organize your recipes
            and plan your meals for the week. Build a recipe collection and
            create personalized meal plans.
          </Section>

          <Section title="Recipe Building">
            📝 Create and manage your favorite recipes{'\n'}
            🥗 Add ingredients and instructions{'\n'}
            📸 Attach photos to your recipes{'\n'}
            🏷️ Organize with tags and categories{'\n'}
            ⭐ Rate and review your creations
          </Section>

          <Section title="Meal Planning">
            📅 Plan meals for the week{'\n'}
            🍳 Drag and drop recipes to days{'\n'}
            📊 Track nutritional information{'\n'}
            👨‍👩‍👧‍👦 Plan for family or individual meals{'\n'}
            🔄 Reuse favorite meal plans
          </Section>

          <Section title="Grocery List">
            🛒 Generate shopping lists from meal plans{'\n'}
            ✅ Check off items as you shop{'\n'}
            🏪 Organize by store sections{'\n'}
            💰 Track prices and budgets{'\n'}
            📋 Add custom items to your list
          </Section>

          <Section title="Development Ready">
            This framework is configured for Windows development and iOS
            deployment, ready for you to build out the meal planning, recipe,
            and grocery features.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFE8E8',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default App;
