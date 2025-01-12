import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const HomePage = () => {
  return (
    <ImageBackground
      source={require('./images/home-page-bg.png')}
      style={styles.background}
    >
      {/* Logo */}
      <Image
        source={require('./images/Night-Knight.png')}
        style={styles.logo}
        resizeMode="cover"
      />

      {/* Tagline Text */}
      <Text style={styles.tagline}>
        Keeping loved ones safe through the night.
      </Text>

      {/* Footer buttons with icons */}
      <View style={styles.footer}>
        <View style={styles.iconButton}>
          <Image
            source={require('./images/alert-icon.png')} // Replace with your alert icon path
            style={styles.icon}
          />
          <Text style={styles.iconText}>Alert</Text>
        </View>
        <View style={styles.iconButton}>
          <Image
            source={require('./images/log-icon.png')} // Replace with your log icon path
            style={styles.icon}
          />
          <Text style={styles.iconText}>Activity Log</Text>
        </View>
        <View style={styles.iconButton}>
          <Image
            source={require('./images/contact-icon.png')} // Replace with your contact icon path
            style={styles.icon}
          />
          <Text style={styles.iconText}>Contacts</Text>
        </View>
        <View style={styles.iconButton}>
          <Image
            source={require('./images/settings-icon.png')} // Replace with your settings icon path
            style={styles.icon}
          />
          <Text style={styles.iconText}>Settings</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 390,
    height: 846.33,
    flexShrink: 0,
    paddingBottom: -2.3, // As per the layout
    backgroundColor: 'lightgray', // Fallback color
  },
  logo: {
    width: 363,
    height: 130,
    flexShrink: 0,
    marginTop: 272, // Padding from top
    marginLeft: 14,
    marginRight: 13,
    marginBottom: 442,
  },
  tagline: {
    width: 311,
    height: 65,
    flexShrink: 0,
    paddingLeft: 16,
    paddingRight: 20,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: 'Livvic', // Ensure the font is loaded or use a fallback
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center', // Adjust text alignment
  },
  footer: {
    position: 'absolute',
    bottom: 50, // Adjust as needed
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50, // Adjust based on your icon size
    marginBottom: 5, // Space between icon and text
  },
  iconText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default HomePage;
