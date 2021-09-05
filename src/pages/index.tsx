import Head from 'next/head'

import RoomScreen from '../views/room'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Threee.js with Blender</title>
        <meta name="description" content="Threee.js with Blender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RoomScreen />
      </main>
    </div>
  )
}

export default Home
