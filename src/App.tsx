import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import '@/App.css'
import { ReferenceConfigService } from './services/ReferenceConfigService'
import Edit from './components/Edit'
import { ReferenceConfig, ReferenceConfigTypeEnum } from './types'

const service = new ReferenceConfigService()

const App = () => {
  const [count, setCount] = useState(0)
  const [referenceConfigs, setReferenceConfigs] = useState<ReferenceConfig[]>(
    []
  )

  useEffect(() => {
    const fetch = async () => {
      const items = await service.getAll()

      setReferenceConfigs(items)
    }

    fetch()
  }, [])

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
        {referenceConfigs.map((item) => (
          <div key={item.id}>
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
            >
              {item.label}
            </a>
            <small style={{ marginLeft: 4 }}>
              {item.type == ReferenceConfigTypeEnum.Two ? 'TWO' : 'OTHER'}
            </small>
          </div>
        ))}
      </div>

      <Edit />
    </>
  )
}

export default App
