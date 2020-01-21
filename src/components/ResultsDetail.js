import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.otherInfo}>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginRight: 0
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10
  },
  otherInfo: {
    color: "#999999"
  }
});

export default ResultsDetail;
