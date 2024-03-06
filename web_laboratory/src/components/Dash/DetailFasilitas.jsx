import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "./styles.css"

const DetailFasilitas = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/fasilitas");
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
    <div>
    <h5 className="has-text-info title mb-0 is-size-6-mobile" style={{fontSize: '18px'}}>Fasilitas Lab</h5>
      <div className="columns is-multiline mt-2 is-variable is-mobile">
        {products.map((product) => (
          <div className="column is-one-fifth-desktop is-one-third-tablet is-one-second-mobile" key={product.id}>
            <div className="card" style={{ height: '100%' }}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Image" style={{ objectFit: 'fill', height: '100%' }}/>
                </figure>
              </div>
              <div className="card-content" style={{ height: '100%' }}>
                <div className="media" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div className="media-content">
                    <p className="title is-5 mb-2 is-size-7-mobile" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.name}</p>
                    <p className="has-text-black mb-1 is-size-7-mobile" style={{ fontSize: '0.8rem' }}>Jumlah: {product.jumlah}</p>
                    <p className="has-text-black mb-2 is-size-7-mobile" style={{ fontSize: '0.8rem' }}>Lokasi: Lab. {product.lab}</p>
                  </div>
                </div>
              </div>
              {/* {user && user.role === "admin" && (
              <footer className="card-footer">
                <Link to={`edit/fasilitas/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
              )} */}
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default DetailFasilitas;