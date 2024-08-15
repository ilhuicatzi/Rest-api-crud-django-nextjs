"use client"
import { Flex, IconButton, AlertDialog, Button } from "@radix-ui/themes";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/`, {
        method: "DELETE",
      });
      console.log(response);
      if(response.ok){
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      
    }
  }


  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <IconButton
          size="1"
          aria-label="Delete"
          color="red"
          variant="ghost"
          className="cursor-pointer"
        >
          <Trash2 height={16} width={16} />
        </IconButton>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Eliminar Tarea</AlertDialog.Title>
        <AlertDialog.Description size="2">
            ¿Estás seguro de que deseas eliminar esta tarea con ID: {id}?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={handleDelete}>
                Eliminar Tarea
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default DeleteButton;
