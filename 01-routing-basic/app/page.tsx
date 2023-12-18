/* 
   Definition Route: localhost:3000/
    * root: /
    * name: home
    * page: app/page.tsx
*/
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className='text-5xl'>Hello World!!!</span>
    </main>
  )
}
