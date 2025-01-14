'use client';
import { vars } from '@/_lib/styles/themes.css';
import { View } from '../../basics/view/view';
import { useScrollPosition } from '@/_lib/hooks/use-scroll-position';
import { useRandomBackground } from '@/utils/get-random-background';

export function ReadingPosition() {
  const [_, pos, height] = useScrollPosition();

  //round, toFixed로 스크롤 끝단에서의 감성 조정
  //완전 끝까지 다 스크롤하지 않아도 글을 다 읽었으면 원을 다 채울 수 있도록
  const read = Math.round(Number((pos / height).toFixed(2)) * 100);
  const { backgroundColor } = useRandomBackground();

  console.log(read);

  return (
    <View
      style={{
        zIndex: '99999',
        position: 'fixed',
        bottom: '50%',
        right: '1rem',
        width: '2.5rem',
        height: `2.5rem`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'transparent',
        borderRadius: '2rem',
        backgroundColor: 'transparent',
        outline: `1.25px ${read < 100 ? 'dotted' : 'solid'} ${backgroundColor}`,
      }}>
      <View
        as="div"
        style={{
          height: `${read}%`,
          width: `${read}%`,
          border: 'none',
          borderRadius: '2rem',
          transition: 'all 0.1s ease-in-out',
          backgroundColor: read < 100 ? vars.color.default : backgroundColor,
        }}
      />
    </View>
  );
}
