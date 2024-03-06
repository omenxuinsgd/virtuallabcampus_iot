import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DetailLab = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/labs");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/labs/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                    <p className="title is-4">{product.name}</p>
                  </div>
                </div>
              </div>
              {user && user.role === "admin" && (
              <footer className="card-footer">
                <Link to={`labs/edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
              )}
              <footer className="card-footer">
                <Link to={`labs/${product.id}`} className="card-footer-item">
                    Detail Lab
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>
  );
};

export default DetailLab;