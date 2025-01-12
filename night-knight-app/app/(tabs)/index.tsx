import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        // Background image
        <Image
          source={require('@/assets/images/home-page-bg.png')} // Adjust path if needed
          style={styles.background}
        />
      }>
      {/* Logo */}
      <ThemedView style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/Night-Knight.png')} // Adjust path if needed
          style={styles.logo}
          resizeMode="cover"
        />
      </ThemedView>

      {/* Tagline */}
      <ThemedView style={styles.taglineContainer}>
        <Text style={styles.tagline}>
          Keeping loved ones safe through the night.
        </Text>
      </ThemedView>

      {/* Rest of the content */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Night Knight!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Download the App!</ThemedText>
        <ThemedText>
          Get the app from the{' '}
          <ThemedText type="defaultSemiBold">App Store (Apple) or the Play Store</ThemedText> to see
          changes. Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 300, // Adjust as needed
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    height: 130,
    width: 363,
  },
  taglineContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  tagline: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});



