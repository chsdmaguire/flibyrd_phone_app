import React from 'react';
import { SafeAreaView, View, FlatList, 
    TouchableOpacity,StyleSheet, Text, ScrollView } from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'First Name',
    nav: 'FirstName'
  },
  {
    id: '2',
    title: 'Last Name',
    nav: 'LastName',
  },
 // {
//     id: '3',
//     title: 'Age',
//     nav: StoreKeysWM.age,
//   },
//   {
//     id: '5',
//     title: 'Income',
//     nav: StoreKeysWM.biWeeklyIncome,
//   },
//   {
//     id: '6',
//     title: 'Federal Taxes',
//     nav: StoreKeysWM.federalTaxes,
//   },
//   {
//     id: '7',
//     title: 'State Taxes',
//     nav: StoreKeysWM.stateTaxes,
//   },

//   {
//     id: '8',
//     title: 'Medical Insurance',
//     nav: StoreKeysWM.medInsurance,
//   },
//   {
//     id: '9',
//     title: 'Defined Benefit Contribution',
//     nav: 'definedBenefitPlan',
//   },
//   {
//     id: '10',
//     title: 'Traditional IRA',
//     nav: 'tradIra',
//   },
//   {
//     id: '11',
//     title: 'Roth IRA',
//     nav: ''
//   },
//   {
//     id: '12',
//     title: 'Brokerage',
//     nav: '',
//   },
//   {
//     id: '13',
//     title: 'Checkings',
//     nav: ''
//   },
//   {
//     id: '14',
//     title: 'Savings',
//     nav: ''
//   },
//   {
//     id: '15',
//     title: 'Student Loans',
//     nav: ''
//   },
//   {
//     id: '16',
//     title: 'Other Expenses',
//     nav: ''
//   },
];

const Item = ({ title }) => (
    <Text style={styles.title}>{title}</Text>
);
   
export const QuestionList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => 
         navigation.navigate(item.nav)}>
    <Item title={item.title} nav={item.nav} />
    </TouchableOpacity>
  );

  return (
      <FlatList
      style={styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginTop: 20,
    paddingVertical: 12,
  },
  item: {
    backgroundColor: '#2945FF',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 32,
    color: '#fff'
  },
});
