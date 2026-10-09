import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={styles.profileImage}
          />

          {/* Online check */}
          <View style={styles.checkCircle}>
            <Text style={styles.check}>✓</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Name */}
        <View style={styles.info}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Diluka</Text>
        </View>

        {/* Email */}
        <View style={styles.info}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.emailRow}>
            <Text style={styles.mailIcon}>✉</Text>
            <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.info}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.pointsRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.value}>0</Text>
          </View>
        </View>

      </View>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* Header */
  header: {
    height: 55,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },

  /* Main Content */
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  /* Profile */
  profileImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },

  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 38,
  },

  checkCircle: {
    position: 'absolute',
    right: 3,
    bottom: 5,
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  check: {
    color: '#00d639',
    fontSize: 25,
    fontWeight: 'bold',
  },

  /* Divider */
  divider: {
    height: 1,
    backgroundColor: '#222222',
    width: '100%',
    marginBottom: 10,
  },

  /* Information */
  info: {
    marginBottom: 14,
  },

  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 3,
  },

  value: {
    fontSize: 11,
    color: '#333333',
  },

  /* Email */
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  mailIcon: {
    fontSize: 13,
    marginRight: 5,
    color: '#000000',
  },

  /* Points */
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 13,
    color: '#000000',
    marginRight: 7,
  },

  /* Floating Button */
  addButton: {
    position: 'absolute',
    right: 12,
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  plus: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: '300',
    marginTop: -2,
  },
});