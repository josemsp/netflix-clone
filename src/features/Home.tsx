import Main from "@/components/Main"
import Row from "@/components/Row"
import { requests } from "@/services"

const Home = () => {
  
  return (
    <div>
      <Main />
      <Row title="Trending" fetchUrl={requests.trending} />
      <Row title="Popular" fetchUrl={requests.popular} />
      <Row title="Up coming" fetchUrl={requests.upComing} />
      <Row title="Top Rated" fetchUrl={requests.topRated} />
      <Row title="Horror" fetchUrl={requests.horror} />
    </div>
  )
}

export default Home