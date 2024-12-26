import { deleteProduct } from "@/app/_actions/products/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteProductDialogProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: DeleteProductDialogProps) => {
  const handleContinueClick = async () => {
    try {
      await deleteProduct({ id: productId });
      toast.success("Poduto excluído com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao excluir o produto");
    }
  };
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem cerrteza?</AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a excluir um produto. Esta ação não pode ser
          desfeita. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductDialogContent;
