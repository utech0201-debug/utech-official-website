import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
export function generateStaticParams(){return products.map(product=>({slug:product.slug}));}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return null;return <main className="subpage"><Link className="back" href="/store"><ArrowLeft size={15}/> Back to UTECH Store</Link><div className="productHero"><span className="eyebrow"><ShoppingBag size={15}/> {product.category}</span><h1>{product.name}</h1><p>{product.description}</p><div className="productStatus">{product.status}<span>UTECH ecosystem product</span></div><div className="storeNotice"><h2>Product pipeline</h2><p>This product page is part of the UTECH storefront foundation. Commerce, payments and inventory will be connected when the store goes live.</p></div></div></main>}
