import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { BackLink } from "@/components/layout/BackLink";
export default function Store(){return <main className="subpage"><BackLink /><div className="subhero"><span className="eyebrow"><ShoppingBag size={15}/> UTECH STORE</span><h1>Tools for the <em>next generation.</em></h1><p>A future home for UTECH templates, digital products, hardware, peripherals and carefully selected technology.</p></div><section className="productGrid">{products.map(product=><Link className="productCard" href={`/store/${product.slug}`} key={product.slug}><div><span>{product.category}</span><b>{product.status}</b></div><h2>{product.name}</h2><p>{product.description}</p><strong>View product <ArrowRight size={15}/></strong></Link>)}</section></main>}
