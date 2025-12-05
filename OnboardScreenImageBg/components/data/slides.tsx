export interface Slide {
  id: string;
  title: string;
  description: string;
  image: number;
}

export const slides:Slide[]=[
  {
    id:'1',
    title:'Track Your Calories Easily',
    description:'Let help you maintain a healthier Lifestyle',
    image:require('../../assets/images/slide1.png')
  },
  {
    id:'2',
    title:'Personalized Meal Recommendation',
    description:'Get custom recommendation tailored for your need',
    image:require('../../assets/images/slide2.png')
  },
  {
    id:'3',
    title:'Stay Motivated',
    description:'Daily progress keeps you on track',
    image:require('../../assets/images/slide3.png')
  }
]