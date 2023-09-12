const nav = [
  {
    name: '프로필',
    id: 1,
  },
  {
    name: '기술 스택',
    id: 2,
  },
  {
    name: '개인 프로젝트',
    id: 3,
  },
  {
    name: '경력 사항',
    id: 4,
  },
  {
    name: '회사 프로젝트',
    id: 5,
  },

  {
    name: '교육 및 활동',
    id: 6,
  },
]

interface liComponent {
  name: string
  id: number
}

const AnimationLi = ({ name, id }: liComponent) => {
  return (
    <li className="cursor-pointer li-ani text-xl">
      {name.split('').map((word, index) => (
        <span
          key={`${id}_${index}`}
          className={`inline-block ${word === ' ' ? 'pl-1' : ''}`}
        >
          {word}
        </span>
      ))}
    </li>
  )
}

const Aside: React.FC<{ isNav: boolean }> = ({ isNav }) => {
  return (
    <aside
      className={`fixed w-1/4 right-0 top-14 z-40 bg-light duration-300 ${
        isNav ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ height: 'calc(100vh - 50px)' }}
    >
      <nav className="relative p-12">
        <ul className="flex-col flex gap-8 text-lg font-medium">
          {nav.map((item) => (
            <AnimationLi key={item.id} name={item.name} id={item.id} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Aside
