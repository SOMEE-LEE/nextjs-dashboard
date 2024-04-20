import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local'; // next의 local 함수 불러옴

export const montserrat = Montserrat({
  // subsets: 폰트 사전 렌더링 유형
  subsets: ['latin'],
  display: 'swap',
});

export const lusitana = Lusitana({
  // 변수형 폰트가 아닌 경우 weight 지정
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
