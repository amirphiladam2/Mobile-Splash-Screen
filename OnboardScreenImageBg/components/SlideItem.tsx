import { View, Text, Image, Dimensions } from 'react-native';
import { Slide } from './data/slides';

const { width,height } = Dimensions.get('window');

interface SlideItemProps {
  item: Slide;
}

export default function SlideItem({ item }: SlideItemProps) {
  return (
    <View style={{ width,height }} className="relative" >
      <Image 
        source={item.image } 
        className="w-full h-full absolute"
        resizeMode="cover"
      />
      <View className="absolute inset-0 bg-black/80" />
      <View className="flex-1 justify-center items-center px-4 z-10">
        <Text className="text-4xl font-bold text-white text-center mb-4">
          {item.title}
        </Text>
        <Text className="text-base text-gray-200 text-center leading-6">
          {item.description}
        </Text>
      </View>
    </View>
  );
}