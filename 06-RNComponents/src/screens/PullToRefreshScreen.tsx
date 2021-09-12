/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };
  return (
    <ScrollView
      style={{ marginTop: refreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6"
          colors={['white']}
          //   style={{ backgroundColor: '#5856D6', height: 100 }}
          //   tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
