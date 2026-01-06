import { StatusBar } from 'expo-status-bar';

import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import Card from 'components/card';
import { Feather } from '@expo/vector-icons';
import Transaction from 'components/Transaction';
import { Link } from "expo-router";
import "../global.css";



import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useMemo, useRef } from 'react';

export default function Home() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = ['25%', '50%', '90%'];


  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };


  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className='h-screen p-4  bg-gray-100 flex  mt-16'>

          

          <View className='flex-row items-center gap-4'>
            <Image source={require('.././assets/avatar.jpg')} className='w-16 h-16 rounded-full  ' />
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

            <ScrollView className='max-h-[275px] z-0'>
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
            <View className="absolute bottom-[-30] self-center z-50">
              <Pressable className="bg-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg" onPress={openBottomSheet}>
                <Feather name="plus" size={20} color="white" />
              </Pressable>
            </View>
          </View>


          <StatusBar style="auto" />

          <BottomSheet
            ref={bottomSheetRef}
            index={-1} // começa fechado
            snapPoints={snapPoints}
            enablePanDownToClose
          >
            <BottomSheetView className="p-6">
              <Text className="text-xl font-bold mb-4">
                Nova Transação
              </Text>

              <Text>Formulário de entrada / saída</Text>
            </BottomSheetView>
          </BottomSheet>

        </View>
      </GestureHandlerRootView>
    </>
  );
}



