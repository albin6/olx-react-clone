import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/config';
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/PostsContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const navigate = useNavigate()
    const { setPostDetails } = useContext(PostContext)
    const [products, setProducts] = useState([])
    const [recommendationList, setRecommendationList] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'products'));
                const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setRecommendationList(json)
            })
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setRecommendationList(json.products)
                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(json => {
                        console.log(json)
                        setRecommendationList(prev => setRecommendationList([...prev, ...json]))
                    })
            });
    }, [])

    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View more</span>
                </div>
                <div className="cards">
                    {products.map(product => (
                        <div onClick={() => {
                            setPostDetails(product)
                            navigate('/view')
                        }} className="card" key={product.id}>
                            <div className="favorite">
                                <Heart />
                            </div>
                            <div className="image">
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                            <div className="content">
                                <p className="rate">&#x20B9; {product.price}</p>
                                <span className="kilometer">{product.category}</span>
                                <p className="name">{product.name}</p>
                            </div>
                            <div className="date">
                                <span>{new Date(product?.createdAt.seconds * 1000).toDateString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="recommendations">
                <div className="heading">
                    <span>Fresh recommendations</span>
                </div>
                <div className="cards">
                    {
                        recommendationList && recommendationList.map(recom => {
                            return (
                                <div key={recom?.id} className="card">
                                    <div className="favorite">
                                        <Heart></Heart>
                                    </div>
                                    <div className="image">
                                        <img src={recom.thumbnail != null ? recom?.thumbnail : recom?.image} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="rate">&#x20B9; {recom?.price}</p>
                                        <span className="kilometer">{recom?.category}</span>
                                        <p className="name">{recom?.title}</p>
                                    </div>
                                    <div className="date">
                                        <span>10/05/2024</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Posts;