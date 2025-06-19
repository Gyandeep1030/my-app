import axios from 'axios';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return {
    props: {
      product: res.data,
    },
  };
}

export default function ProductDetail({ product }) {
  return (
    <div className="container py-4">
      <Link href="/" className="btn btn-secondary mb-3">← Back</Link>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" style={{ maxHeight: '400px', objectFit: 'contain' }} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <h3 className="text-success">${product.price}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          {product.rating && (
            <p>
              <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
