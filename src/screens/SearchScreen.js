import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    /*  <View style={{ flex: 1 }}> */
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errMsg ? errMsg : null}</Text>
      {/* <Text style={styles.totalResults}>
        We have found {results.length} results
      </Text> */}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />

        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricer" />
        <ResultList
          results={filterResultsByPrice("$$$")}
          title="Big Spender!"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  totalResults: {
    margin: 15
  }
});

export default SearchScreen;
