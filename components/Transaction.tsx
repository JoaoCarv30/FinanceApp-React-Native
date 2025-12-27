
import { View, Text, Pressable } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';


export default function Transaction() {
    return (
            <View className='p-6 flex-row items-center justify-between '>
              <View className='flex-row'>
                <Octicons name="note" size={24} color="black" />
                <View className='ml-4 gap-0'>
                  <Text className='text-gray-700 text-lg mb-2 font-bold'>Assinatura Ifood</Text>
                  <Text className='text-gray-500'>26 de Maio de 2025</Text>
                </View>
              </View>

              <View className='flex-row items-center'>
                <Text className='text-green-400 text-lg font-bold'> + R$ 50,00</Text>
                <Pressable
                  onPress={() => console.log('Delete Transaction')}
                  className="bg-transparent p-3 rounded-full items-center justify-center"
                >
                  <Feather name="trash-2" size={15} color="#adadad" />
                </Pressable>

              </View>

            </View>
        
    )};