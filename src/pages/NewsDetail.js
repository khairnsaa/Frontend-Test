import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router"
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NewsDetail = () => {
    let { Title } = useParams();
    const [ newsDetail, setNewsDetail ] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            let data = await axios.get(`https://inshortsapi.vercel.app/news?category=science`)
            let result = data.data.data;
            console.log(result);
            result.map(e => {
                if( e.title === Title ) {
                    setNewsDetail({
                        title: e.title,
                        img: e.imageUrl,
                        content: e.content,
                        author: e.author,
                        date: e.date,
                        time: e.time
                    })
                }
            })
        }
        fetchData()
    }, [])

    return ( 
        <>
            <Header path="login" text="Logout" />
            {console.log(newsDetail)}
            <Container className="mt-3">
                <Link to="/news">Back to News Page</Link>
                <div className="d-flex flex-column align-items-center mt-5">
                    <img src={newsDetail.img} alt={newsDetail.title} className="news-detail-img rounded" />
                    <h1 className="news-title text-center my-4">{newsDetail.title}</h1>
                    <p>{newsDetail.content}</p>                    
                </div>
                <Footer />
            </Container>
        </>
     );
}
 
export default NewsDetail;