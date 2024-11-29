import React from 'react';
import { Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <Text>Name: My To-Do App</Text>
      <Text>Developer: Your Name</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
