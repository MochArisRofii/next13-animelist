
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const TopAnime = await response.json()

  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={TopAnime} />
      </section>
    </>
  )
}

export default Page