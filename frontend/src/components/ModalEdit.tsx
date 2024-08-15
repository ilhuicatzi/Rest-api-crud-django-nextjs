"use client";

import {
  TextField,
  Heading,
  Box,
  TextArea,
  Flex,
  Dialog,
  IconButton,
  Button,
} from "@radix-ui/themes";
import { LetterText, FilePenLine } from "lucide-react";
import SelectStatus from "./SelectStatus";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TaskIntef } from "./TableTasks";
interface TasksInput {
  title: string;
  description: string;
  status: string;
}

function ModalEdit({ task }: { task: TaskIntef }) {
  const router = useRouter();
  const { control, handleSubmit } = useForm<TasksInput>({
    defaultValues: {
      title: task.title,
      description: task.description,
      status: task.status,
    },
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<TasksInput> = async (data) => {
    try {
      setLoading(true);
      setErrorMessage(null); // Limpiar mensajes de error previos
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${task.id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error al guardar la tarea");
      }

      const result = await response.json();
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Hubo un problema al guardar la tarea. Intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger>
        <IconButton
          size="1"
          aria-label="Edit"
          color="jade"
          variant="ghost"
          className="cursor-pointer"
        >
          <FilePenLine height={16} width={16} />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Editar tarea</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Realiza los cambios que consideres necesarios
        </Dialog.Description>

        <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
          <Box mb={"4"}>
            <Heading size={"2"} mb={"1"} ml={"1"}>
              Título
            </Heading>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField.Root placeholder="Título de la tarea" {...field}>
                  <TextField.Slot>
                    <LetterText height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              )}
            />
          </Box>
          <Box mb={"4"}>
            <Heading size={"2"} mb={"1"} ml={"1"}>
              Descripción
            </Heading>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea
                  placeholder="Agrega una descripción de la tarea"
                  {...field}
                />
              )}
            />
          </Box>
          <Box mb={"4"}>
            <Heading size={"2"} mb={"1"} ml={"1"}>
              Estado
            </Heading>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <SelectStatus value={field.value} onChange={field.onChange} />
              )}
            />
          </Box>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="red">
                Cancelar
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button
                variant="soft"
                color="green"
                type="submit"
                disabled={loading}
              >
                {loading ? "Guardando..." : "Actualizar Tarea"}
              </Button>
            </Dialog.Close>
          </Flex>
          {errorMessage && (
            <Box mb={"4"} style={{ color: "red" }}>
              {errorMessage}
            </Box>
          )}
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default ModalEdit;
