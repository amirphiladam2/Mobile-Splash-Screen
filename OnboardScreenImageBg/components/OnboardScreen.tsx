import { useState, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Text, ViewToken,Pressable } from 'react-native';
import SlideItem from './SlideItem';
import { slides } from './data/slides';
import { useRouter } from 'expo-router';

export default function OnboardScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);
  const router=useRouter();

  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const skipToEnd = () => {
    slidesRef.current?.scrollToIndex({ index: slides.length - 1 });
    setCurrentIndex(slides.length - 1);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50
  }).current;

  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <View className="flex-1 bg-black">
      <FlatList
        ref={slidesRef}
        data={slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    
      <View className="absolute bottom-32 flex-row self-center">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full mx-1 ${
              currentIndex === index 
                ? 'w-6 bg-white' 
                : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </View>

      <View className="absolute bottom-10 left-5 right-5">
        {isLastSlide ? (
          <TouchableOpacity 
            className="bg-green-500 py-4 rounded-xl items-center"
            onPress={() => router.push('/AuthScreen')}
          >
            <Text className="text-white text-lg font-bold">Get Started</Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row justify-between items-center">
            <TouchableOpacity 
              onPress={skipToEnd}
              className="py-3 px-20 bg-white/20 rounded-xl"
            >
              <Text className="text-white text-base font-semibold">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={goToNextSlide}
              className="py-3 px-20 bg-white rounded-xl"
            >
              <Text className="text-black text-base font-semibold">Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}