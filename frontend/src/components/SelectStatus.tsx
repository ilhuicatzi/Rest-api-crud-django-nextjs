import { Flex, Select } from "@radix-ui/themes";
import { CircleHelp, CircleX, CircleCheck, Clock } from "lucide-react";

interface SelectStatusProps {
  value: string;
  onChange: (value: string) => void;
}

function SelectStatus({ value, onChange }: SelectStatusProps) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="w-full" placeholder="Selecciona un estado" />
      <Select.Content className="w-11/12">
        <Select.Item value="completed">
          <Flex align="center" gap={"2"}>
            <CircleCheck height="16" width="16" className="text-zinc-400" />
            Completado
          </Flex>
        </Select.Item>
        <Select.Item value="in-progress">
          <Flex align="center" gap={"2"}>
            <Clock height="16" width="16" className="text-zinc-400" />
            En progreso
          </Flex>
        </Select.Item>
        <Select.Item value="pending">
          <Flex align="center" gap={"2"}>
            <CircleHelp height="16" width="16" className="text-zinc-400" />
            Pendiente
          </Flex>
        </Select.Item>
        <Select.Item value="canceled">
          <Flex align="center" gap={"2"}>
            <CircleX height="16" width="16" className="text-zinc-400" />
            Cancelado
          </Flex>
        </Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

export default SelectStatus;