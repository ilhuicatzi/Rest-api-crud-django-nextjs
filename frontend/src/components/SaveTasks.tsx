"use client"
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useState } from "react";

interface SaveTasksProps {
  onClick: () => Promise<void>; 
  loading?: boolean;
  id: number | null;
}

function SaveTasks({ onClick, loading, id }: SaveTasksProps) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del botón si es necesario
    setError(null);
    try {
      await onClick();
    } catch (err) {
      setError("Hubo un problema al guardar la tarea. Intenta nuevamente.");
    }
    finally{
       setOpen(false);
    }
  };
  

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger>
        <Button color="indigo">{id != null ? "Editar" : "Guardar" }</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{id != null ? "Editar" : "Guardar" } Tarea</AlertDialog.Title>
        <AlertDialog.Description size="2">
          ¿Deseas {id != null ? "editar" : "guardar" } esta tarea en la base de datos?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="green" onClick={(e) => handleSave(e)} disabled={loading}>
              {loading ? "Guardando..." : "Guardar Tarea"}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default SaveTasks;