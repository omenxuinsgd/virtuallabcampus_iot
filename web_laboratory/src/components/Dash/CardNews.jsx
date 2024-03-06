import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CardNews = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/news/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container is-centered mt-5">
      <div className="columns is-multiline mt-2">
        {products.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-6 mb-1">{product.name}</p>
                    <p className="has-text-primary mb-2" style={{fontSize: '12px'}}>{product.createdAt}</p>
                    <p className="has-text-black mb-0" style={{fontSize: '12px', 
                        textOverflow: 'ellipsis',
                        width: '250px',
                        whiteSpace: 'nowrap',
                        overflow:'hidden'}}>{product.deskripsi}</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer mt-0">
                <Link to={`news/${product.id}`} className="card-footer-item">
                    Detail Berita
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default CardNews;