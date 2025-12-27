import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import Card from 'components/card';
import { Feather } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import Transaction from 'components/Transaction';

export default function App() {
  return (
    <>
      <View className='h-screen p-4  bg-gray-100 flex  mt-16'>


        <View className='flex-row items-center gap-4'>
          <Image source={require('./assets/avatar.jpg')} className='w-16 h-16 rounded-full  ' />
          <Text className='text-black text-2xl font-bold ml-4'>Seja Bem vindo, João</Text>
        </View>

        <Card />

        <View className='mt-10 rounded-lg  bg-white shadow-lg relative'>
          <View className='flex-row justify-between items-center p-6'>
            <Text className='text-black text-2xl font-bold mb-4'>Lançamentos</Text>
            <View className='bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center'>
              <Text className='text-white font-bold'>5</Text>
            </View>
          </View>
          <View className="h-px  bg-gray-300" />

          <ScrollView className='max-h-[375px] z-0'>
            <Transaction />
            <View className="h-px bg-gray-300" />
            <Transaction />
            <View className="h-px bg-gray-300" />
            <Transaction />
            <View className="h-px bg-gray-300" />
            <Transaction />
            <View className="h-px bg-gray-300" />
            <Transaction />
          </ScrollView>
              <View className="absolute bottom-[-25] self-center z-50">
          <Pressable className="bg-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
            <Feather name="plus" size={24} color="white" />
          </Pressable>
        </View>
        </View>
    

        <StatusBar style="auto" />

      </View>
    </>
  );
}



