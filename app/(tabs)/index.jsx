import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

const Index = ({ navigation }) => {
  const router = useRouter(); // Get the router object for navigation

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://cryptoventure.ai/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const blogs = posts.reverse();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.pageHeading}>This is a Blog Post Page</Text> */}

      <FlatList
        data={blogs}
        keyExtractor={(item) => item._id.toString()} // Use blog ID as key
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/BlogDescription?blogId=${item.title}`)} // Use router.push for navigation
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>
              {new Date(item.createdAt).toLocaleDateString("en-GB")}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingVertical: 20,
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
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  pageHeading: {
    color: "#ffffff",
    fontSize: 28,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "cursive",
  },
});
