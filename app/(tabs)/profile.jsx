import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import ProfilePic from "../../assets/images/mobile-game-app-background-application-interface-vector-35750547.webp";

const Profile = () => {
  const openEmail = () => {
    Linking.openURL("mailto:gmridul898@gmail.com").catch((err) =>
      console.error("Failed to open email:", err)
    );
  };

  const openPhone = () => {
    Linking.openURL("tel:8527269730").catch((err) =>
      console.error("Failed to open phone dialer:", err)
    );
  };

  const openPort = () => {
    Linking.openURL("https://mridulgupta.netlify.app").catch((err) =>
      console.error("Failed to open portfolio:", err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={ProfilePic} style={styles.profileImage} />

      <View>
        {/* Name */}
        <Text style={styles.text}>
          <Text style={styles.label}>Name: </Text>Mridul Gupta
        </Text>

        {/* Email with Link */}
        <Pressable onPress={openEmail}>
          <Text style={[styles.text, styles.link]}>
            <Text style={styles.label}>Email: </Text>gmridul898@gmail.com
          </Text>
        </Pressable>

        {/* Phone with Link */}
        <Pressable onPress={openPhone}>
          <Text style={[styles.text, styles.link]}>
            <Text style={styles.label}>Phone: </Text>8527269730
          </Text>
        </Pressable>

        {/* portfolio with Link */}
        <Pressable onPress={openPort}>
          <Text style={[styles.text, styles.link]}>
            <Text style={styles.label}>Portfolio: </Text>Mridul
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#000000",
    padding: 20,
    gap: 40,
  },

  // contentview: {
  //   // flex: 1,
  // },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: "grey",
  },
  label: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  link: {
    color: "#007BFF", // Link color
    // textDecorationLine: 'underline', // Underline the link
  },
});
