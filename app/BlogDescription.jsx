import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import RenderHTML from "react-native-render-html";
import { ScrollView } from "react-native";

const BlogDescription = () => {
  const searchParams = useLocalSearchParams(); // Call useSearchParams to get the parameters
  const blogId = searchParams.blogId; // Access the blogId parameter
  // const { width } = useWindowDimensions(); // Get the screen width for RenderHTML

  const [blog, setBlog] = useState(null); // State for specific blog
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch specific blog data by ID
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://cryptoventure.ai/api/posts`);
        const data = await response.json();
        // console.log(data);
        const blog = data.find((item) => item.title === blogId);
        // console.log(blog);
        setBlog(blog); // Set the fetched blog to state
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!blog) {
    return <Text style={styles.errorText}>Blog not found!</Text>;
  }

  const tagsStyles = {
    body: {
      whiteSpace: "normal",
      // marginBottom: 20,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <Text style={styles.title}>{blog.title}</Text>
      {/* Render HTML content */}
      <View style={{backgroundColor: "#e8e1e1" , padding:10}}>
        <RenderHTML source={{ html: blog.content }} tagsStyles={tagsStyles} />
      </View>
    </ScrollView>
  );
};

export default BlogDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
    padding: 10,
    // marginBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
});
