export type TCourse = {
  id: string;
  category: string;
  date: string;
  duration: string;
  enrolled: string;
  image: string;
  img_bg: string;
  lectures: string;
  lessons: string;
  payment: TPayment;
  price: string;
  review: string;
  subtitle: string;
  teacher_img: string;
  title: string;
  tutor_name: string;
  watching: string;
  _id: string;
};

type TPayment = {
  amount: number;
  created: number;
  last4: string;
  transaction: string;
  userEmail: string;
};
