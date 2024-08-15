"use client";

import { TextField, Heading, Box, TextArea, Flex } from "@radix-ui/themes";
import { LetterText } from "lucide-react";
import SelectStatus from "./SelectStatus";
import SaveTasks from "./SaveTasks";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface TasksInput {
  title: string;
  description: string;
  status: string;
}

function FormTasks() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<TasksInput>({
    defaultValues: {
      title: "",
      description: "",
      status: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<TasksInput> = async (data) => {
    try {
      setLoading(true);
      console.log(data);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
        <SaveTasks onClick={handleSubmit(onSubmit)} loading={loading} id={null} />
      </Flex>
    </form>
  );
}

export default FormTasks;
