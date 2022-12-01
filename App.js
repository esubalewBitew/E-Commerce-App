import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import algoliasearch from 'algoliasearch';
import {InstantSearch} from 'react-instantsearch-native';
import SearchBox from './src/SearchBox';
import InfiniteHits from './src/InfiniteHits';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
);

const App = () => {
  return (
    <SafeAreaView style={{}}>
      <InstantSearch searchClient={searchClient} indexName="instant_search">
        <SearchBox />
        <InfiniteHits />
      </InstantSearch>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
