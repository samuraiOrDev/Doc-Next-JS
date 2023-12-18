import { redirect } from 'next/navigation'


const HomePage = () => {
  redirect('/dashboard/counter')
  // return (
  //   <>
  //     <h1 className='text-5xl'>Hello World!!!</h1>
  //   </>
  // )
}

export default HomePage