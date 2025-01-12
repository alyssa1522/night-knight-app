import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/home-page-bg.png')} // Replace with your background image path
        style={styles.background}
      />

      {/* Main Content */}
      <View style={styles.content}>
        {/* App Logo */}
        <Image
          source={require('@/assets/images/Night-Knight.png')} // Replace with your logo image path
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Tagline */}
        <Text style={styles.tagline}>
          Keeping loved ones safe through the night.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All Secure</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation (No icons, just placeholders) */}
      <View style={styles.navigation}>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
        <View style={styles.navItem}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  tagline: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#36454F', // Dark grey for the button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: '#A1CEDC', // Light blue text
    fontSize: 18,
    fontWeight: '600',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#1D3D47', // Dark background for navigation
  },
  navItem: {
    width: 50,
    height: 50,
    backgroundColor: '#A1CEDC', // Light blue placeholder
    borderRadius: 25,
  },
});
