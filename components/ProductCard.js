import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top p-3" height={250} style={{ objectFit: 'contain' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text"><strong>Price:</strong> ${product.price}</p>
        <p className="card-text"><strong>Category:</strong> {product.category}</p>
        {product.rating && <p className="card-text"><strong>Rating:</strong> {product.rating.rate}</p>}
        <Link href={`/product/${product.id}`} className="mt-auto btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}
