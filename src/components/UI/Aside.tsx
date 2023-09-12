const nav = [
  {
    name: '프로필',
    link: '1',
  },
  {
    name: '기술 스택',
    link: '2',
  },
  {
    name: '개인 프로젝트',
    link: '3',
  },
  {
    name: '경력 사항',
    link: '4',
  },
  {
    name: '회사 프로젝트',
    link: '5',
  },

  {
    name: '교육 및 활동',
    link: '6',
  },
]

interface liComponent {
  name: string
  link: string
}

const AnimationLi = ({ name, link }: liComponent) => {
  return (
    <li className="cursor-pointer li-ani text-xl">
      {name.split('').map((word, index) => (
        <span
          key={`${link}-${word}` + index}
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
          {nav.map((item, index) => (
            <AnimationLi key="index" name={item.name} link={item.link} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Aside
