import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import '@/App.css'
import { ReferenceConfig, ReferenceConfigTypeEnum } from './types'

const referenceConfig: ReferenceConfig[] = [
  {
    id: 'vite',
    label: 'Vite',
    link: 'https://vitejs.dev/',
    type: ReferenceConfigTypeEnum.One,
  },
  {
    id: 'react',
    label: 'React',
    link: 'https://react.dev/',
    type: ReferenceConfigTypeEnum.One,
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    type: ReferenceConfigTypeEnum.One,
  },
  {
    id: 'eslint',
    label: 'ESLint',
    link: 'https://eslint.org/',
    type: ReferenceConfigTypeEnum.One,
  },
  {
    id: 'prettier',
    label: 'Prettier',
    link: 'https://prettier.io/',
    type: ReferenceConfigTypeEnum.One,
  },
  {
    id: 'vitest',
    label: 'Vitest',
    link: 'https://vitest.dev/',
    type: ReferenceConfigTypeEnum.One,
  },
]

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logo-block'>
        <a
          href='https://vitejs.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <div>X</div>
        <a
          href='https://react.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React + TypeScript + ESLint + Prettier + Vitest</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className='reference-block'>
        {referenceConfig.map((item: ReferenceConfig) => (
          <a
            key={item.id}
            href={item.link}
            target='_blank'
            rel='noreferrer'
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default App
