import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

const news = () => {
    const router = useRouter(); // Get the router object for navigation
  
  const [news, setNews] = useState([]); // State to store news
  const [loading, setLoading] = useState(true); // Loader state
  const API_KEY = "7adc726415b64c099bb5982f9af28a56"; // Replace with your newsapi.org API key

  useEffect(() => {
    // Fetch news data
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=all&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setNews(data.articles); // Set news articles to state
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const defaultNewsImage =
    "https://imgs.search.brave.com/HR0XFBMIRZuCiFkz3eLK2qw6_PMe6Ni9hG4M2BQ7gh0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NDI0MDQ3L3Bob3Rv/L3RoZS1uZXdzcGFw/ZXItYmlnLW5ld3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWNCd1QxUzRSaFly/VjUxOG1RX3lQVlJ3/NzhpckJGeDFLa3JH/MU12Ukx4Tjg9";

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={()=>router.push(`${item.url}`)}>
            {item.urlToImage ? (
              <Image
                source={{
                  uri: item.urlToImage,
                }}
                style={styles.image}
              />
            ) : (
              <Image
                source={{
                  uri: defaultNewsImage,
                }}
                style={styles.image}
              />
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default news;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

// 7adc726415b64c099bb5982f9af28a56
