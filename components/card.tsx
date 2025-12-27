
import { View, Text, Button } from 'react-native';


export default function Card() {

    return (
        <View className='flex flex-col gap-5  bg-black rounded-lg p-6 mt-10'>

            <View className='flex-row justify-between '>
                <Text className='text-white text-lg font-bold'>MAIO / 2025</Text>
                <Text className='text-white'> Ver Extrato</Text>
            </View>
            <View className="h-px bg-gray-600" />

            <View>
                <Text className='text-2xl text-gray-300'>Orçamento Disponível</Text>
                <Text className='text-4xl text-white font-bold mt-2'>R$ 1.000,00</Text>
            </View>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-white text-lg'>Entradas</Text>
                    <Text className='text-green-400 text-lg font-bold'>R$ 5.000,00</Text>
                </View>
                <View>
                    <Text className='text-white text-lg'>Saídas</Text>
                    <Text className='text-red-400 text-lg font-bold'>R$ 4.000,00</Text>
                </View>
            </View>
        </View>
    )


}