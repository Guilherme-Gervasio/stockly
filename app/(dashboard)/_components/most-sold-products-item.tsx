import ProductStatusBadge from "@/app/_components/product-status-badge";
import { MostSoldProductsDto } from "@/app/_data-acess/dashboard/get-dashboard";
import { formatCurrency } from "@/app/_helpers/currency";

interface MostsoldProductProps {
  product: MostSoldProductsDto;
}

const MostsoldProductItem = ({ product }: MostsoldProductProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[6px]">
        <ProductStatusBadge status={product.status} />
        <p className="font-semibold">{product.name}</p>
        <p className="font-medium text-slate-500">
          {formatCurrency(Number(product.price))}
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold">{product.totalSold} vendido(s)</p>
      </div>
    </div>
  );
};

export default MostsoldProductItem;
