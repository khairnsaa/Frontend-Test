import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container} from "react-bootstrap";
import { useNavigate } from 'react-router';
import Header from "../components/Header";
import Footer from "../components/Footer";

const News = () => {

    const history = useNavigate()
    const [ newsList, setNewsList ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let data = await axios.get(`https://inshortsapi.vercel.app/news?category=science`)
            let result = data.data.data;
            console.log(result);
            setNewsList(result.map( e => {
                return {
                    title: e.title,
                    img: e.imageUrl,
                    content: e.content,
                    author: e.author,
                    date: e.date,
                    time: e.time
                }
            }))
        }
        fetchData()
    }, [])

    const goToNewsDetail = id => history(`/news/${id}`)

    return (
        <>
            <Header path="login" text="Logout" />
            <Container className="mt-5">
                <h1 className="mt-5 text-center">Hot News!</h1>
                <Container className="news-container d-flex flex-wrap mt-5 justify-content-between align-items-baseline">
                    { newsList !== null && (
                        <>
                            {newsList.map(e => {
                                return (
                                    <Card style={{ width: '18rem' }} className="m-3">
                                        <Card.Img className="news-img" variant="top" src={e.img} />
                                        <Card.Body className="card-body">
                                            <Card.Title>{e.title}</Card.Title>
                                            <Card.Text>Author: {e.author}</Card.Text>
                                            <Card.Text>Published: {e.date}, {e.time}</Card.Text>
                                            <p style={{ cursor: 'pointer'}} onClick={() => goToNewsDetail(e.title)} className="text-primary text-underline"><u>Read More</u></p>
                                        </Card.Body>
                                    </Card>  
                                )
                            })}
                        </>
                    )}                            
                </Container>
                <Footer />
            </Container>
        </>
    );
}
 
export default News;